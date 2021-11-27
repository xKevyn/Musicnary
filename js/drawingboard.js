let tool = "pen"
let colorSelected

function select_tool(id) {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    /* highlights the tools that are selected */
    if (tool != id) tool.style.borderColor = null
    tool = document.getElementById(id)
    if (tool != document.getElementById("undo") && tool != document.getElementById("redo")) tool.style.borderColor = "black"

    /* this allows the pen to gain its previous picked colour after using other tools */
    if (tool == document.getElementById("pen")) select_color("picked-color")

    let painting = false
    let rect = canvas.getBoundingClientRect()
    let x
    let y
    let currentX
    let currentY

    function startPosition(e) {
        painting = true
        x = e.clientX - rect.left
        y = e.clientY - rect.top
        draw(e)
    }

    function endPosition() {
        painting = false
        ctx.beginPath()

        switch (tool) {
            case document.getElementById("square"):
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(currentX, y)
                ctx.lineTo(currentX, currentY)
                ctx.lineTo(x, currentY)
                ctx.lineTo(x, y)
                ctx.strokeStyle = colorSelected
                ctx.stroke()
                break
            case document.getElementById("filled-square"):
                ctx.fillRect(x, y, currentX - x, currentY - y)
                break
            case document.getElementById("circle"):
                ctx.arc((currentX + x) / 2, (currentY + y) / 2, Math.abs(currentX - x) / 2, 0, 2 * Math.PI)
                ctx.strokeStyle = colorSelected
                ctx.stroke()
                break
            case document.getElementById("filled-circle"):
                ctx.arc((currentX + x) / 2, (currentY + y) / 2, Math.abs(currentX - x) / 2, 0, 2 * Math.PI)
                ctx.fill()
                break
            case document.getElementById("line"):
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.lineTo(currentX, currentY)
                ctx.strokeStyle = colorSelected
                ctx.stroke()
                break
            default:
        }
    }

    function draw(e) {
        if (!painting) return
        ctx.lineCap = "round"

        let rect = canvas.getBoundingClientRect()
        currentX = e.clientX - rect.left
        currentY = e.clientY - rect.top

        switch (tool) {
            case document.getElementById("pen"):
                ctx.lineTo(currentX, currentY)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(currentX, currentY)
                break
            case document.getElementById("eraser"):
                ctx.lineTo(currentX, currentY)
                ctx.stroke()
                ctx.beginPath()
                ctx.moveTo(currentX, currentY)
                ctx.strokeStyle = "white"
                break
            default:
        }
    }

    function fill() {
        if (tool == document.getElementById("bucket")) ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    canvas.addEventListener('mousedown', startPosition)
    document.addEventListener('mouseup', endPosition)
    canvas.addEventListener('mousemove', draw)
    canvas.addEventListener('mousedown', fill)
}

window.addEventListener("load", () => {
    /* defaults the pen tool */
    select_tool("pen")

    /* canvas stuff */
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth
})

function select_color(id) {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    colorSelected = document.getElementById(id).style.backgroundColor
    ctx.strokeStyle = colorSelected
    ctx.fillStyle = colorSelected
    document.querySelector("div.picked-color").style.backgroundColor = colorSelected
}

let deafultCircle = "circle2"
let sizeSelected

function select_size(circle) {
    if (circle != deafultCircle) document.querySelector(`div.${deafultCircle}`).style.backgroundColor = null
    deafultCircle = circle
    document.querySelector(`div.${circle}`).style.backgroundColor = "black"
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    switch (circle) {
        case "circle1":
            sizeSelected = 4
            break
        case "circle2":
            sizeSelected = 8
            break
        case "circle3":
            sizeSelected = 12
            break
        case "circle4":
            sizeSelected = 16
            break
        case "circle5":
            sizeSelected = 20
            break
        default:
    }
    ctx.lineWidth = sizeSelected
}

function get_slider_size() {
    document.querySelector(`div.${deafultCircle}`).style.backgroundColor = null
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    ctx.lineWidth = sizeSelected = document.getElementById("slider").value
}

var countdown = 120

if (sessionStorage.getItem("gamemode") == "speedrun") {
    countdown = 60
    document.querySelector("circle").classList.add("speedrun")
}

function save_image1() {
    const canvas = document.querySelector("#canvas")
    sessionStorage.setItem("image1", canvas.toDataURL());
}

function save_image2() {
    const canvas = document.querySelector("#canvas")
    sessionStorage.setItem("image2", canvas.toDataURL());
}

function save_image3() {
    const canvas = document.querySelector("#canvas")
    sessionStorage.setItem("image3", canvas.toDataURL());
}

const audios = document.querySelectorAll('audio');

function get_volume() {

    audios.forEach(audio => {
        audio.volume = document.getElementById("volume-slider").value
    });
}
let tool = "pen"

function select_tool(id) {

    /* highlights the tools that are selected */
    if (tool != id) tool.style.borderColor = null
    tool = document.getElementById(id)
    tool.style.borderColor = "black"

    /* this allows the pen to gain its previous picked colour after using other tools */
    if (tool == document.getElementById("pen")) select_color("picked-color")
}

window.addEventListener("load", () => {
    /* preselect the pen tool */
    select_tool("pen")

    /* canvas stuff */
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth

    let painting = false

    function startPosition(e) {
        painting = true
        draw(e)
    }

    function endPosition() {
        painting = false
        ctx.beginPath()
    }

    function draw(e) {
        if (!painting) return
        ctx.lineCap = "round"

        let rect = canvas.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        /* eraser function */
        if (tool == document.getElementById("eraser")) ctx.strokeStyle = "white"

        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x, y)
    }

    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', endPosition)
    canvas.addEventListener('mousemove', draw)
})

function saveImage() {
    const canvas = document.querySelector("#canvas")
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
        const image = canvas.toDataURL("image.png").replace("image/png", "image/octet-stream")
    }
}

function select_color(id) {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    let colorSelected = document.getElementById(id).style.backgroundColor
    ctx.strokeStyle = colorSelected
    document.querySelector("div.picked-color").style.backgroundColor = colorSelected
}

let deafultCircle = "circle2"

function select_size(circle) {
    if (circle != deafultCircle) document.querySelector(`div.${deafultCircle}`).style.backgroundColor = null
    deafultCircle = circle
    document.querySelector(`div.${circle}`).style.backgroundColor = "black"
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    switch (circle) {
        case "circle1":
            ctx.lineWidth = 4
            break
        case "circle2":
            ctx.lineWidth = 8
            break
        case "circle3":
            ctx.lineWidth = 12
            break
        case "circle4":
            ctx.lineWidth = 16
            break
        case "circle5":
            ctx.lineWidth = 20
            break
        default:
    }
}

function get_slider_size() {
    document.querySelector(`div.${deafultCircle}`).style.backgroundColor = null
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    ctx.lineWidth = document.getElementById("slider").value
}
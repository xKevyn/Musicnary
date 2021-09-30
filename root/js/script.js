let tool = "pen"

function select_tool(id) {
    if (tool != id) tool.style.borderColor = null
    tool = document.getElementById(id)
    tool.style.borderColor = "black"
}

window.addEventListener("load", () => {
    select_tool("pen")

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")
    var colorSelected = document.getElementById("c1").style.backgroundColor

    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth

    let painting = false
    let lineWidth = 5

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
        ctx.lineWidth = lineWidth
        ctx.lineCap = "round"

        let rect = canvas.getBoundingClientRect()
        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

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
    colorSelected = document.getElementById(id).style.backgroundColor
    ctx.strokeStyle = colorSelected
    document.querySelector("div.picked-color").style.backgroundColor = colorSelected
}
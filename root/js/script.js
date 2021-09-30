let tool = "pen"
let color = "c1"

function select_tool(id) {
    if (tool != id) tool.style.borderColor = "white"
    tool = document.getElementById(id)
    tool.style.borderColor = "black"
}

function select_color(id) {

}

window.addEventListener("load", () => {
    select_tool("pen")
    console.log(document.querySelector("#c2").style)
        /* Canvas part */

    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d")

    canvas.height = canvas.clientHeight
    canvas.width = canvas.clientWidth

    let colorSelected = "black"

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
        ctx.strokeStyle = colorSelected

        let x = e.clientX - 295
        let y = e.clientY - 130

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
try {
    var image1 = document.querySelector("#playerDrawing1")
    image1.src = sessionStorage.getItem("image1")
} catch (e) {
    console.log(e)
}

try {
    var image2 = document.querySelector("#playerDrawing2")
    image2.src = sessionStorage.getItem("image2")
} catch (e) {
    console.log(e)
}

try {
    var image3 = document.querySelector("#playerDrawing3")
    image3.src = sessionStorage.getItem("image3")
} catch (e) {
    console.log(e)
}

try {
    var guess1 = document.querySelector("#playerGuess1")
    guess1.innerHTML = sessionStorage.getItem("guess1")
} catch (e) {
    console.log(e)
}

try {
    var guess2 = document.querySelector("#playerGuess2")
    guess2.innerHTML = sessionStorage.getItem("guess2")
} catch (e) {
    console.log(e)
}

try {
    var guess3 = document.querySelector("#playerGuess3")
    guess3.innerHTML = sessionStorage.getItem("guess3")
} catch (e) {
    console.log(e)
}

try {
    var prompt1 = document.querySelector("#playerPrompt")
    prompt1.innerHTML = sessionStorage.getItem("prompt")
} catch (e) {
    console.log(e)
}

var playername = document.querySelectorAll(".player1name")

for (var i = 0, len = playername.length; i < len; i++) {
    playername[i].innerText = sessionStorage.getItem("name")
}
function save_guess1() {
    const inputBox = document.querySelector("#inputBox")
    sessionStorage.setItem("guess1", inputBox.value);
}

function save_guess2() {
    const inputBox = document.querySelector("#inputBox")
    sessionStorage.setItem("guess2", inputBox.value);
}

function save_guess3() {
    const inputBox = document.querySelector("#inputBox")
    sessionStorage.setItem("guess3", inputBox.value);
}
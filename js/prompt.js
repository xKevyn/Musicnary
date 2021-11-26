function save_prompt() {
    const inputBox = document.querySelector("#inputBox")
    sessionStorage.setItem("prompt", inputBox.value)
}
window.onload = () => {

    const settingButtons = document.querySelectorAll("div.gamemode-selection > button")
    let gamemodeSelected = document.getElementById("default")

    settingButtons[0].addEventListener("click", () => {
        swap_class(settingButtons[0], settingButtons[1])
        document.querySelector("div.settings").classList.add("invis")
        document.querySelector("div.gamemode-wrapper").classList.remove("invis")
    })

    settingButtons[1].addEventListener("click", () => {
        swap_class(settingButtons[1], settingButtons[0])
        document.querySelector("div.settings").classList.remove("invis")
        document.querySelector("div.gamemode-wrapper").classList.add("invis")
    })

    function swap_class(element1, element2) {
        element1.classList.remove("unselected-button")
        element2.classList.add("unselected-button")
    }

    document.querySelector("button.invite-button").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("copied successfully!")
        }, (err) => {
            alert('Failed to copy');
        })
    })
}
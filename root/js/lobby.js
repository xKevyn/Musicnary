window.onload = () => {

    const gamemodeButtons = document.querySelectorAll("div.gamemodes > div")
    const settingButtons = document.querySelectorAll("div.gamemode-selection > button")
    let gamemodeSelected = document.getElementById("default")


    for (let i = 0; i < gamemodeButtons.length; i++) {
        gamemodeButtons[i].addEventListener("click", () => {
            select_gamemode(gamemodeButtons[i].id)
        })
    }

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

    function select_gamemode(id) {
        if (gamemodeSelected != document.getElementById(id)) gamemodeSelected.classList.remove("selected-gamemode")
        gamemodeSelected = document.getElementById(id)
        gamemodeSelected.classList.add("selected-gamemode")
    }

    document.querySelector("button.invite-button").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("copied successfully!")
        }, (err) => {
            alert('Failed to copy');
        })
    })
}
window.onload = () => {
    const gamemodeButtons = document.querySelectorAll("div.gamemodes > div")
    let gamemodeSelected = document.getElementById("default")


    for (let i = 0; i < gamemodeButtons.length; i++) {
        gamemodeButtons[i].addEventListener("click", () => {
            select_gamemode(gamemodeButtons[i].id)
        })
    }

    function swap_class(element1, element2) {
        element1.classList.remove("unselected-button")
        element2.classList.add("unselected-button")
    }

    function select_gamemode(id) {
        if (gamemodeSelected != document.getElementById(id)) gamemodeSelected.classList.remove("selected-gamemode")
        gamemodeSelected = document.getElementById(id)
        sessionStorage.setItem("gamemode", id)
        gamemodeSelected.classList.add("selected-gamemode")
    }
    select_gamemode("default")
    document.querySelector("button.invite-button").addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("copied successfully!")
        }, (err) => {
            alert('Failed to copy');
        })
    })
}


var playername = document.querySelectorAll(".player1name")

for (var i = 0, len = playername.length; i < len; i++) {
    playername[i].innerText = sessionStorage.getItem("name")
}
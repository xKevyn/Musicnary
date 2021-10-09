window.onload = () => {

    const settingButtons = document.querySelectorAll("div.login-selection > button")
    console.log(settingButtons)

    settingButtons[0].addEventListener("click", () => {
        swap_class(settingButtons[0], settingButtons[1])
        document.querySelector("div.login-wrapper2").classList.add("invis")
        document.querySelector("div.login-wrapper").classList.remove("invis")
    })

    settingButtons[1].addEventListener("click", () => {
        swap_class(settingButtons[1], settingButtons[0])
        document.querySelector("div.login-wrapper2").classList.remove("invis")
        document.querySelector("div.login-wrapper").classList.add("invis")
    })

    function swap_class(element1, element2) {
        element1.classList.remove("unselected-button")
        element2.classList.add("unselected-button")
    }

    let helpButtons = document.querySelectorAll("div.help-button")
    let image = document.querySelector("div.section > img")
    let title = document.querySelector("div.help-desc > h2")
    let desc = document.querySelector("div.help-desc > p")
    let images = ["images/help1.png", "images/help2.png", "images/help3.png", "images/help4.png", "images/help5.png", "images/help6.png"]
    let titles = ["1. CALLING IS BETTER", "2. TIME TO CHOOSE A SONG", "3. TIME TO DRAW", "4. WHAT IS IT?", "5. SEE WHAT HAPPENED", "6. MAKE NEW FRIENDS"]
    let descs = ["Invite your friends to a voice call", "Each player must choose a song", "You gonna receive a song to draw", "Try to describe the drawing with a song ", "Watch the hilarious result of the telephone game", "Find thousands of Musicnary players on our Discord server!"]

    helpButtons[0].addEventListener("click", () => {
        previous_image()
    })

    helpButtons[1].addEventListener("click", () => {
        next_image()
    })

    function next_image() {
        if (image.getAttribute('src') == images[-1]) return
        for (let i = 0; i < images.length; i++) {
            if (image.getAttribute('src') == images[i]) {
                imageSelection(images[i + 1])
                return
            }
        }
    }

    function previous_image() {
        if (image.getAttribute('src') == images[0]) return
        for (let i = 0; i < images.length; i++) {
            if (image.getAttribute('src') == images[i]) {
                imageSelection(images[i - 1])
                return
            }
        }
    }

    function imageSelection(img) {
        switch (img) {
            case images[0]:
                image.src = "images/help1.png"
                title.innerHTML = titles[0]
                desc.innerHTML = descs[0]
                break
            case images[1]:
                image.src = "images/help2.png"
                title.innerHTML = titles[1]
                desc.innerHTML = descs[1]
                break
            case images[2]:
                image.src = "images/help3.png"
                title.innerHTML = titles[2]
                desc.innerHTML = descs[2]
                break
            case images[3]:
                image.src = "images/help4.png"
                title.innerHTML = titles[3]
                desc.innerHTML = descs[3]
                break
            case images[4]:
                image.src = "images/help5.png"
                title.innerHTML = titles[4]
                desc.innerHTML = descs[4]
                break
            case images[5]:
                image.src = "images/help6.png"
                title.innerHTML = titles[5]
                desc.innerHTML = descs[5]
                break
            default:
        }
    }
}
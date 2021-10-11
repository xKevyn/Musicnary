let songChoosed
let songPlayingChecker

function searchMusic() {
    let input, filter, ul, li, a, i, txtValue, noInput
    input = document.getElementById("inputBox")
    filter = input.value.toUpperCase()
    ul = document.getElementById("songList")
    li = ul.getElementsByTagName("li")
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText

        //If user enter keywords, the suggested songs will pop up
        if (filter.length == 0) {
            li[i].style.display = "none"
        } else if (txtValue.toUpperCase().indexOf(filter) > 0 || txtValue.toUpperCase().startsWith(filter)) {
            li[i].style.display = "block"
            ul.style.opacity = 1
                //If not, it will be null
        } else {
            li[i].style.display = "none"
        }
    }
}

function playSongPreview(songId) {

    if (songPlayingChecker) {
        stopSong()
    }
    songChoosed = document.getElementById(songId)
    songChoosed.play()
    songPlayingChecker = true
}


function changeInputBox(s) {
    document.getElementById("inputBox").value = s
}

function stopSong() {
    songChoosed.pause()
    songChoosed.currentTime = 0
    changeInputBox("")
}
let songChoosed
let songPlayingChecker

function searchMusic() {
    let input, filter, ul, li, a, i, txtValue
    input = document.getElementById("inputBox")
    filter = input.value.toUpperCase()
    ul = document.getElementById("songList")
    li = ul.getElementsByTagName("li")
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""
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
let songChoosed
let songPlayingChecker

function searchMusic() {
    let input, filter, ul, li, a, i, txtValue
    input = document.getElementById("inputBox")
    filter = input.value.toLocaleLowerCase()
    ul = document.getElementById("songList")
    li = ul.getElementsByTagName("li")
    for (i = 0; i < li.length; i++) {
        a = li[i];
        txtValue = a.textContent || a.innerText
        //If user enter keywords, the suggested songs will pop up
        if (txtValue.toLocaleLowerCase().startsWith(filter) > 0 || 
            txtValue.toLocaleLowerCase().indexOf(filter) > 0) {
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
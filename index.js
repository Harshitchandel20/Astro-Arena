let button = document.getElementById("play-btn");
let guideBtn = document.getElementById("guide-img");
let cancel = document.getElementById("cancel-img");
let skip = document.getElementById("skip");
let username = document.getElementById("user-input");
let nickname = document.getElementById("nickname");

button.onclick = () => {
    if(username.value==="" || nickname.value===""){
        alert("enter valid name")
    }else{
    location.href = "game.html";
    }
}

guideBtn.onclick = () => {
    document.getElementById("popup").style.display = "block"
}

cancel.onclick = () => {
    document.getElementById("popup").style.display = "none"
}

skip.onclick = () => {
    location.href = "index.html";
}


const bgMuisc = new Audio('images/alexander-nakarada-space-ambience.mp3')
bgMuisc.play()
bgMuisc.loop = true
let button = document.getElementById("play-btn");
let guideBtn = document.getElementById("guide-img");
let cancel = document.getElementById("cancel-img");
let skip = document.getElementById("skip")

button.onclick = () => {
    location.href = "game.html";
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
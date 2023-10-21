let playAgain = document.getElementById("play-again")
let rtnHome = document.getElementById("rtn-home")
let scorebox = document.getElementById("score")
let highscore = document.getElementById("high-score")
let msg = document.getElementById("msg")

let textArr = ["You Could Do Better", "Good Job you are going good", "Great job, You are a pro now"];

playAgain.onclick = () => {
    location.href = "game.html";
}

rtnHome.onclick = () => {
    location.href = "index.html";
}

scorebox.textContent= "Score: "+localStorage.getItem("score")

function checkScore(score){
    if(score<=50){
        msg.textContent = textArr[0];
    }else if(score<=100){
        msg.textContent = textArr[1];
    }else if(score<=150){
        msg.textContent = textArr[2];
    }
}

checkScore(localStorage.getItem("score"))

highscore.textContent = "High Score: "+localStorage.getItem("highscore")

const bgMuisc = new Audio('images/alexander-nakarada-space-ambience.mp3')
bgMuisc.play()
bgMuisc.loop = true
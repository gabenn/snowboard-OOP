const modalBox = document.querySelector(".modalBox");
const modalHighScore = document.querySelector("#modalHighScore");
const modalScore = document.querySelector("#modalScore");
const modalPlay = document.querySelector(".modalPlay");
class Modal{
    constructor() {
        this.setModalValues = (gameScore,highScore)=>{
            modalHighScore.value = highScore;
            modalScore.value = gameScore;
        }
        this.setModalBoxZindex=()=>{
            modalBox.style.zIndex=3;
        }
    }
}
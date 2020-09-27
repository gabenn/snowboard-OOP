const scoreBox = document.querySelector("#scoreBox");
if (localStorage.getItem('highScoreLS') == undefined) localStorage.setItem('highScoreLS', 0);
let gameScore=0;
const highScore = parseInt(localStorage.getItem('highScoreLS'));
class Game{
    init =()=>{
        for (let i = 0; i < 40; i++) {
            const trapXY = setXY();
            treeTrap.createTrap(trapXY[0], trapXY[1]);
        };
    }
    setScoreBoxValue=(gameScore)=>{
        scoreBox.innerHTML=`Score: ${gameScore}`
    }
    lose=()=>{
        treeTrap.clearIntervals();
        setTimeout(() => {
            modal.setModalBoxZindex();
            modal.setModalValues(gameScore,highScore);
            game.setScoreBoxValue(gameScore);
        }, 500);
        document.removeEventListener("keydown", moveListeners)
    }
}
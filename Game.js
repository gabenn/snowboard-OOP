class Game {
    constructor() {
        this.gameScore = 0;
        this.highScore = parseInt(localStorage.getItem('highScoreLS'));
        this.bonusScore = 0;
        this.initialTrapsQuantity = 40;
    }
    init = (Trap) => {
        for (let i = 0; i < 40; i++) {
            const trapXY = setXY();
            Trap.createTrap(trapXY[0], trapXY[1]);
        };
    }
    setScoreValue(bonusScore) {
        this.gameScore = traps.length - this.initialTrapsQuantity + bonusScore;
    }
    setScoreBoxValue = (gameScore) => {
        scoreBox.innerHTML = `Score: ${gameScore}`;
    }
    lose = (gameScore, highScore, Trap, Modal) => {
        Trap.clearIntervals();
        setTimeout(() => {
            Modal.setModalBoxZindex();
            Modal.setModalValues(gameScore, highScore);
            this.setScoreBoxValue(gameScore);
        }, 500);
        setInterval(() => {
            Trap.clearIntervals();
        }, 1)
    }
}
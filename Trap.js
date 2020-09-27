class Trap {
    constructor() {
        this.moveLength = 3;
        this.intervalTime = 15;
        this.jumpQuantity = 3;
    }
    createTrap = (x, y) => {
        const treeTrap = document.createElement('div');
        treeTrap.className = "traps deadTrees";
        treeTrap.style.left = `${x}px`;
        treeTrap.style.top = `${y}px`;
        traps.push(treeTrap);
        return document.body.appendChild(treeTrap);
    }
    moveRight = () => {
        intervalRight =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop - treeTrap.moveLength}px`;
                    trap.style.left = `${trap.offsetLeft - treeTrap.moveLength}px`;
                    collision();
                });
            }, treeTrap.intervalTime);
    }
    moveLeft = () => {
        intervalLeft =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop -treeTrap.moveLength}px`;
                    trap.style.left = `${trap.offsetLeft + treeTrap.moveLength}px`;
                });
                collision();
            }, treeTrap.intervalTime);
    }
    moveDown = () => {
        intervalDown =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop-treeTrap.moveLength}px`;
                });
                collision();
            }, treeTrap.intervalTime)
    }
    moveUp = () => {
        intervalUp =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop+treeTrap.moveLength}px`;
                });
                collision();
            }, treeTrap.intervalTime)
    }
    jump = () => {
        if (treeTrap.jumpQuantity > 0) {
            treeTrap.jumpQuantity -= 1;
            for (let i = 0; i < 50; i++) {
                traps.forEach(trap => {
                    setTimeout(() => {
                        trap.style.top = `${trap.offsetTop-treeTrap.moveLength}px`;
                    }, treeTrap.intervalTime)
                });
            }
        }
        treeTrap.moveDown();
    }
    clearIntervals = () => {
        clearInterval(intervalDown);
        clearInterval(intervalRight);
        clearInterval(intervalLeft);
        clearInterval(intervalUp);
    }
}
let intervalRight, intervalDown, intervalLeft, intervalUp;
const traps = [];
const playerCharacter = document.querySelector("#playerCharacter");
const setXY = () => {
    let trapX, trapY;
    const trapXY = [];

    trapX = Math.floor(Math.random() * window.innerWidth);

    if (trapX < 65) trapX += 64;
    if (trapX > innerWidth - 65) trapX -= 64;

    trapY = Math.floor(Math.random() * window.innerHeight + 600);
    trapXY[0] = trapX;
    trapXY[1] = trapY;

    return trapXY;
}
const collision = () => {
    for (let i = 0; i < traps.length; i++) {
        if (traps[i].offsetTop < playerCharacter.offsetTop + 32 &&
            traps[i].offsetTop > playerCharacter.offsetTop - 32 &&
            traps[i].offsetLeft < playerCharacter.offsetLeft + 32 &&
            traps[i].offsetLeft > playerCharacter.offsetLeft - 64
        ) {
            game.lose();
        }
        if (traps[i].offsetTop < 0) { //changing position when trap is unvisible 
            const trapXY = setXY();

            traps[i].style.left = `${trapXY[0]}px`; // setting trap x coordinate
            traps[i].style.top = `${trapXY[1]}px`; // setting trap y coordinate

            if (traps[traps.length - 1].offsetTop < 50) treeTrap.createTrap(trapXY[0], trapXY[1]);
            if (highScore == undefined || highScore < gameScore) localStorage.setItem('highScoreLS', gameScore);

            gameScore = traps.length - 40; //score
            scoreBox.innerHTML = `Score: ${gameScore}`;
        }
    }
}
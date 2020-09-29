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
    moveRight = (moveLength, intervalTime, collision) => {
        intervalRight =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop - moveLength}px`;
                    trap.style.left = `${trap.offsetLeft - moveLength}px`;
                    collision();
                });
            }, intervalTime);
    }
    moveLeft = (moveLength, intervalTime, collision) => {
        intervalLeft =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop -moveLength}px`;
                    trap.style.left = `${trap.offsetLeft + moveLength}px`;
                });
                collision();
            }, intervalTime);
    }
    moveDown = (moveLength, intervalTime, collision) => {
        intervalDown =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop-moveLength}px`;
                });
                collision();
            }, intervalTime)
    }
    moveUp = (moveLength, intervalTime, collision) => {
        intervalUp =
            setInterval(function () {
                traps.forEach(trap => {
                    trap.style.top = `${trap.offsetTop+moveLength}px`;
                });
                collision();
            }, intervalTime)
    }
    jump = (moveLength, intervalTime, Trap, collision) => {
        if (this.jumpQuantity > 0) {
            this.jumpQuantity -= 1;
            for (let i = 0; i < 50; i++) {
                traps.forEach(trap => {
                    setTimeout(() => {
                        trap.style.top = `${trap.offsetTop-moveLength}px`;
                    }, intervalTime)
                });
            }
        }
        this.moveDown(moveLength, intervalTime, collision);
    }
    clearIntervals = () => {
        clearInterval(intervalDown);
        clearInterval(intervalRight);
        clearInterval(intervalLeft);
        clearInterval(intervalUp);
    }
}
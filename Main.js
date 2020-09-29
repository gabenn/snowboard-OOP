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

(() => {
    // objects
    const game = new Game();
    const treeTrap = new Trap();
    const modal = new Modal();
    // player graphs urls
    const playerDown = './assets/playerDown.png';
    const playerLeft = './assets/playerLeft.png';
    const playerRight = './assets/playerRight.png';
    // prod mode    
    const prodMode = false;

    const collision = () => {
        for (let i = 0; i < traps.length; i++) {
            if (traps[i].offsetTop < player.offsetTop + 32 &&
                traps[i].offsetTop > player.offsetTop - 32 &&
                traps[i].offsetLeft < player.offsetLeft + 32 &&
                traps[i].offsetLeft > player.offsetLeft - 64
            ) {
                game.lose(game.gameScore, game.highScore, treeTrap, modal);
            } //if hitbox;
            if (traps[i].offsetTop < 0) { //changing position when trap is unvisible 
                const trapXY = setXY();

                traps[i].style.left = `${trapXY[0]}px`; // setting trap x coordinate
                traps[i].style.top = `${trapXY[1]}px`; // setting trap y coordinate

                if (traps[traps.length - 1].offsetTop < 50) { //creating new traps and increasing score
                    treeTrap.createTrap(trapXY[0], trapXY[1]);
                    if (game.highScore < game.gameScore) localStorage.setItem('highScoreLS', game.gameScore);
                    game.setScoreValue(game.bonusScore);
                    game.setScoreBoxValue(game.gameScore);
                }
            } //if (traps[i].offsetTop < 0)
        } //for
    } //collision

    const moveListeners = (e) => {
        switch (e.key) {
            case ' ':
                if (prodMode) treeTrap.clearIntervals();
                break;

            case 'ArrowRight':
            case 'd':
                treeTrap.clearIntervals();
                treeTrap.moveRight(treeTrap.moveLength, treeTrap.intervalTime, collision);
                playerCharacter.style.backgroundImage = `url("${playerRight}")`;
                favIcon.href = playerRight;
                break;

            case 'ArrowLeft':
            case 'a':
                treeTrap.clearIntervals();
                treeTrap.moveLeft(treeTrap.moveLength, treeTrap.intervalTime, collision);
                playerCharacter.style.backgroundImage = `url("${playerLeft}")`;
                favIcon.href = playerLeft;
                break;

            case 'ArrowDown':
            case 's':
                treeTrap.clearIntervals();
                treeTrap.moveDown(treeTrap.moveLength, treeTrap.intervalTime, collision);
                playerCharacter.style.backgroundImage = `url("${playerDown}")`;
                favIcon.href = playerDown;
                break;

            case 'ArrowUp':
            case 'w':
                if (prodMode) {
                    treeTrap.clearIntervals();
                    treeTrap.moveUp(treeTrap.moveLength, treeTrap.intervalTime, collision);
                }
                break;

            case 'Shift':
                treeTrap.clearIntervals();
                treeTrap.jump(treeTrap.moveLength, treeTrap.intervalTime, treeTrap, collision);
                break;
        } //switch
    } //movelisteners
    document.addEventListener("keydown", moveListeners)
    game.init(treeTrap);
})();
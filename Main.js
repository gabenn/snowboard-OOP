const game= new Game();
const treeTrap = new Trap();
const modal = new Modal();    
(()=>{  
    const playerDown = './assets/playerDown.png';
    const playerLeft = './assets/playerLeft.png';
    const playerRight = './assets/playerRight.png';
        
    const prodMode = false;
        
    const moveListeners =(e) => {
        switch(e.key){
            case ' ':
                if(prodMode)treeTrap.clearIntervals();
                break;
    
            case 'ArrowRight':
            case 'd':
                treeTrap.clearIntervals();
                treeTrap.moveRight();
                playerCharacter.style.backgroundImage = `url("${playerRight}")`;
                favIcon.href = playerRight;
                break;
    
            case 'ArrowLeft':
            case 'a':
                treeTrap.clearIntervals();
                treeTrap.moveLeft();
                playerCharacter.style.backgroundImage = `url("${playerLeft}")`;
                favIcon.href = playerLeft;
                break;
    
            case 'ArrowDown':
            case 's':
                treeTrap.clearIntervals();
                treeTrap.moveDown();
                playerCharacter.style.backgroundImage = `url("${playerDown}")`;
                favIcon.href = playerDown;
                break;
    
            case 'ArrowUp':
            case 'w':
                if(prodMode){
                    treeTrap.clearIntervals();
                    treeTrap.moveUp();
                }
                break;
    
            case 'Shift':
                treeTrap.clearIntervals();
                treeTrap.jump();
                break;
        }
    }
    document.addEventListener("keydown", moveListeners)
    game.init();
})();
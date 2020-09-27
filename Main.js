const game= new Game();
const treeTrap = new Trap();
const modal = new Modal();
const point = new Point();

const playerDown = './assets/playerDown.png';
const playerLeft = './assets/playerLeft.png';
const playerRight = './assets/playerRight.png';

const moveListeners =(e) => {
    if (e.key == " ") {
        treeTrap.clearIntervals();
    }
    if (e.key == "ArrowRight" || e.key == "d") {
        treeTrap.clearIntervals();
        treeTrap.moveRight();
        
        playerCharacter.style.backgroundImage = `url("${playerRight}")`;
        favIcon.href = playerRight;
    }
    if (e.key == "ArrowDown" || e.key == "s") {
        treeTrap.clearIntervals();
        treeTrap.moveDown();
        
        playerCharacter.style.backgroundImage = `url("${playerDown}")`;
        favIcon.href = playerDown;
    }
    if (e.key == "ArrowLeft" || e.key == "a") {
        treeTrap.clearIntervals();
        treeTrap.moveLeft();
        
        playerCharacter.style.backgroundImage = `url("${playerLeft}")`;
        favIcon.href = playerLeft;
    }
    if (e.key == "ArrowUp" || e.key == "w") {
        treeTrap.clearIntervals();
        treeTrap.moveUp();
    }
    if(e.key =="Shift"){
        treeTrap.clearIntervals();
        treeTrap.jump();
    }
}
document.addEventListener("keydown", moveListeners)
game.init();
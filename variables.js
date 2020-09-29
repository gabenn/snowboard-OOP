//Traps
const traps = [];
const player = document.querySelector("#playerCharacter");
let intervalRight, intervalDown, intervalLeft, intervalUp;

//Game
const scoreBox = document.querySelector("#scoreBox");
if (localStorage.getItem('highScoreLS') == undefined) localStorage.setItem('highScoreLS', 0);

//Modal
const modalBox = document.querySelector(".modalBox");
const modalHighScore = document.querySelector("#modalHighScore");
const modalScore = document.querySelector("#modalScore");
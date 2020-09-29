class Modal {
    setModalValues = (gameScore, highScore) => {
        modalHighScore.value = highScore;
        modalScore.value = gameScore;
    }
    setModalBoxZindex = () => {
        modalBox.style.zIndex = 3;
    }
}
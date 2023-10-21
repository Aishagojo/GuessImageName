function CheckAnswer() {
    const userGuess = document.getElementById('userInput').value.toLowerCase();
    const correctAnswer = images[currentIndex].name.toLowerCase();

    if (userGuess === correctAnswer) {
        score++;
        document.getElementById('score').textContent = score;
    }

    clearInterval(timer);
    currentIndex++;

    if (currentIndex < images.length) {
        displayImage(currentIndex);
        startTimer();
    } else {
        endGame();
    }

    document.getElementById('userInput').value = '';
}

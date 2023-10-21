const images = [
    { name: 'titanic', src: './oceann.jpg' },
    { name: 'pyramid', src: './pyramid.jpg' },
    { name: 'light Yagami', src: './light Yagami.jpg' },
    { name: 'bermuda triangle', src: './bermuda triangle.jpg' },
    { name: 'jeffrey Dahmer', src: './jeffrey Dahmer.jpg' }
];

let score = 0;
let currentIndex = 0;
let timer;
let gameStarted = false;

function displayImage(index) {
    const displayedImage = document.getElementById('displayed-image');
    displayedImage.src = images[index].src;
    displayedImage.alt = images[index].name;
}

function startTimer() {
    let seconds = 10;
    timer = setInterval(() => {
        document.getElementById('timer').textContent = `Time left: ${seconds}s`;
        seconds--;

        if (seconds < 0) {
            clearInterval(timer);
            currentIndex++;
            if (currentIndex < images.length) {
                displayImage(currentIndex);
                startTimer();
            } else {
                endGame();
            }
        }
    }, 1000);
}

function CheckAnswer() {
    const userGuess = document.getElementById('userInput').value.toLowerCase();
    const correctAnswer = images[currentIndex].name.toLowerCase();

    if (userGuess === correctAnswer) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
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

function endGame() {
    const scoreButton = document.getElementById('scoreButton');
    scoreButton.textContent = `Final Score: ${score}`;
    score = 0;
    gameStarted = false;
    currentIndex = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
}

// Get references to buttons
const startButton = document.getElementById('startButton');
const submitButton = document.getElementById('submitbtn');

// Add click event listener to start button
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
        displayImage(currentIndex);
        startTimer();
        const scoreButton = document.getElementById('scoreButton');
        scoreButton.textContent = ''; // Clear the final score display
    }
});

// Add click event listener to submit button
submitButton.addEventListener('click', CheckAnswer);

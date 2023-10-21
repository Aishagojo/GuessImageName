
const images = [
    { name: 'titanic', src: './oceann.jpg' },
    { name: 'jeffrey ', src: './jeffrey Dahmer.jpg' },
    { name: 'bermuda ', src: './bermuda triangle.jpg' },
    { name: 'pyramid', src: './pyramid.jpg' },
    { name: 'death note', src: './light Yagami.jpg' },
    { name: 'mahito ', src: './mahito.jpg' },
    { name: 'pyramid', src: './pyramid.jpg' },
    { name: 'mahito ', src: './mahito.jpg' },
    { name: 'jeffrey ', src: './jeffrey Dahmer.jpg' },
    { name: 'titanic', src: './oceann.jpg' },
  


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
    clearInterval(timer); // Clear any existing intervals before starting a new one
    timer = setInterval(() => {
        if (gameStarted && seconds >= 0) {
            document.getElementById('timer').textContent = `Time left: ${seconds}s`;
            seconds--;

            if (seconds < 0) {
                clearInterval(timer);
                currentIndex++;
                if (currentIndex < images.length) {
                    displayImage(currentIndex);
                    startTimer();
                } 
            }
        } else if (!gameStarted) {
            clearInterval(timer); // Stop the timer if the game has ended
        }
    }, 1000);
}

function CheckAnswer() {
    if (gameStarted) {
        const userGuess = document.getElementById('userInput').value.toLowerCase();
        const correctAnswer = images[currentIndex].name.toLowerCase();

        if (userGuess === correctAnswer) {
            score++;
        }

        score++;
        currentIndex++;

        if (currentIndex < images.length) {
            displayImage(currentIndex);
            document.getElementById('score').textContent = `Score: ${score}`;
            startTimer();
        }  else{
            score++;
            endGame();
        }

        document.getElementById('userInput').value = '';
    }
}


function endGame() {
    const scoreButton = document.getElementById('scoreButton');
    scoreButton.textContent = `Final Score: ${score}`;
    score = 0;
    gameStarted = false;
    currentIndex = 0;
    document.getElementById('score').textContent = 'Score: 0';
    clearInterval(timer); // Stop the timer
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

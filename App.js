const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let squareColor;

function randomSquare(){
    squares.forEach(className => {
        className.classList.remove('mole');
    });

    let randomSquares = squares[Math.floor(Math.random() * 9)];

    randomSquares.classList.add('mole');

    hitPosition = randomSquares.id;
}

squares.forEach(square => {
    square.addEventListener('click', function(){
        if(square.id === hitPosition){
            // changeSquareColor(square.id);
            document.getElementById(square.id).classList.add('active');
            setTimeout(function(){
                document.getElementById(square.id).classList.remove('active');
             }, 300);
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

// function changeSquareColor(id) {
//     document.getElementById(id).style.backgroundColor = "red";
// }

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(countDownTimerID);
        clearInterval(timerId);
        alert('Game Over! Your Score is ' + result);
    }
}

let countDownTimerID = setInterval(countDown, 1000);
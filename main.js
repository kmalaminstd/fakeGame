const p1ScoreElem = document.querySelector('.p1Score');
const p2ScoreElem = document.querySelector('.p2Score');
const winningScoreElem = document.querySelector('.customTime');
const form = document.querySelector('form');
const playerInp = form.querySelector('form .playerInp');
const p1Btn = document.querySelector('.p1Btn');
const p2Btn = document.querySelector('.p2Btn');
const resetBtn = document.querySelector('.resetBtn');

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
let gameOver = false;
let turnPlayer = 'p1';

winningScoreElem.textContent = winScore;

// all function will be here


// player one button control
function changeplaeyerOneBtn(){
    p1Btn.setAttribute('disabled', 'disabled');
    p2Btn.setAttribute('disabled', 'disabled');
    p1Btn.style.backgroundColor = 'lightgreen';
    p2Btn.style.backgroundColor = 'lightgreen';
    p1Btn.style.cursor = 'no-drop';
    p2Btn.style.cursor = 'no-drop';
}

function playerOneBtnRevers(){
    p1Btn.style.backgroundColor = 'lightgreen';
    p1Btn.style.cursor = 'no-drop';
    p1Btn.setAttribute('disabled', 'disabled');


    p2Btn.style.backgroundColor = 'rgb(18, 158, 72)';
    p2Btn.style.cursor = 'pointer';
    p2Btn.removeAttribute('disabled');
}


// player two button control
function changePlayerTwoBtn(){
    p1Btn.setAttribute('disabled', 'disabled');
    p2Btn.setAttribute('disabled', 'disabled');
    p1Btn.style.backgroundColor = 'lightgreen';
    p2Btn.style.backgroundColor = 'lightgreen';
    p1Btn.style.cursor = 'no-drop';
    p2Btn.style.cursor = 'no-drop';
}






function playerTwoBtnRevers(){
    p2Btn.style.backgroundColor = 'lightgreen';
    p2Btn.style.cursor = 'no-drop';
    p2Btn.setAttribute('disabled', 'disabled');


    p1Btn.style.backgroundColor = 'rgb(18, 158, 72)';
    p1Btn.style.cursor = 'pointer';
    p1Btn.removeAttribute('disabled');
}

// reset elements function
function resetElements(){
    p1Score = 0;
    p2Score = 0;
    winScore = 5;
    gameOver = false;
    turnPlayer = 'p1';

    p1Btn.style.backgroundColor = 'rgb(18, 158, 72)';
    p1Btn.style.cursor = 'pointer';
    p1Btn.removeAttribute('disabled');

    p2Btn.style.backgroundColor = 'rgb(18, 158, 72)';
    p2Btn.style.cursor = 'pointer';
    p2Btn.removeAttribute('disabled');

    p1ScoreElem.textContent = p1Score;
    p2ScoreElem.textContent = p2Score;

    winningScoreElem.textContent = winScore;
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    resetElements();


    let plInp = parseInt(playerInp.value);

    // console.log(playerInp.value);

    winScore = plInp;

    if(plInp < 1){
        alert('Please provide a value is getter than 0');
        // plInp = 5;
    }

    winningScoreElem.textContent = plInp;

    playerInp.value = '';

})

p1Btn.addEventListener('click', function(){
    if(turnPlayer === 'p1' && !gameOver && p1Score < winScore){
        p1Score++;

    p1ScoreElem.textContent = p1Score;

    turnPlayer = 'p2';

    playerOneBtnRevers();



    }
    if(p1Score === winScore){
        gameOver = true;

        changeplaeyerOneBtn();

        alert('Player one win');
    }

})



p2Btn.addEventListener('click', function(){
    if(turnPlayer === 'p2' && !gameOver && p2Score < winScore){
        p2Score++;

        turnPlayer = 'p1';

    p2ScoreElem.textContent = p2Score;

   
    playerTwoBtnRevers();
    

    }
    if(p2Score === winScore){
        gameOver = true;

        changePlayerTwoBtn();

        alert('Player Two win');

    }

})


resetBtn.addEventListener('click', function(){
    resetElements();

})
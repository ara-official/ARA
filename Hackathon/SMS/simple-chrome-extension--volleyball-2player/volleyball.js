////////////////////////////////////////////////////////////
// Initialize
// : communication with google
// : chrome extension 실행 시, 이전 data 불러 오기
chrome.storage.sync.get(function(data){
    // load from chrome server
    
    console.log("data : ", data);
    if(data.scoreP1 !== undefined)
    {
        scoreOfPlayer1 = data.scoreP1;
        scoreOfPlayer2 = data.scoreP2;
        gameSpeed = data.gameSpeed;
        document.querySelector('#scoreArea').value = `${scoreOfPlayer1} - ${scoreOfPlayer2}`;
        document.querySelector('#gameSpeed').value = `gameSpeed : ${gameSpeed} ms`;
    }
    // Init
    initialize();

    startGame();
});

function initialize(){
    initStadium();
    initPlayerPosition();
    initBallPosition();
}

function storeData(){
    chrome.storage.sync.set({
        scoreP1: scoreOfPlayer1,
        scoreP2: scoreOfPlayer2,
        gameSpeed: gameSpeed
    })
}
function stopGame(){
    console.log("stopGame()");
    storeData();

    canvasClear(player1);
    canvasClear(player2);
    canvasClear(ball);
    clearInterval(retInterval);

    initPlayerPosition();
    initBallPosition();
}

function initStadium(){
    const rgb = [0, 255, 0];
    for(let x = volleyballNet[0]; x < volleyballNet[2]; x++)
    {
        for(let y = volleyballNet[1]; y < volleyballNet[3]; y++)
        {
            const position = [x, y];
            canvasDraw(position, rgb);
        }
    }
}

function initPlayerPosition(){
    const initPositionOfPlayer1 = [60, 140];
    const initPositionOfPlayer2 = [240, 140];
    player1[0] = initPositionOfPlayer1[0];
    player1[1] = initPositionOfPlayer1[1];
    player2[0] = initPositionOfPlayer2[0];
    player2[1] = initPositionOfPlayer2[1];
    console.log(`player1 : ${player1}`);

    canvasDraw(initPositionOfPlayer1, colorOfPlayer1);
    shadowOfPlayer1[0] = initPositionOfPlayer1[0];
    shadowOfPlayer1[1] = initPositionOfPlayer1[1];

    canvasDraw(initPositionOfPlayer2, colorOfPlayer2);
    shadowOfPlayer2[0] = initPositionOfPlayer2[0];
    shadowOfPlayer2[1] = initPositionOfPlayer2[1];
}

function initBallPosition(){
    const initPositionOfBall = [140, 30];
    ball[0] = initPositionOfBall[0];
    ball[1] = initPositionOfBall[1];

    canvasDraw(initPositionOfBall, colorOfBall);

    shadowOfBall = initPositionOfBall;
}

function startGame(){
    stopGame();

    // ball direction setting
    // 0 1 2    ↖ ↑ ↗
    // 3 4 5    ← 0 →
    // 6 7 8    ↙ ↓ ↘
    let tempValue = 0;
    while(true)
    {
        tempValue = Math.floor(Math.random() * 8);

        if( tempValue === 0 ||  tempValue === 2 ||  tempValue === 6 ||  tempValue === 8)
        {
            break;
        }
    }
    ballDirection = tempValue;
    retInterval = setInterval(moveBall, gameSpeed/*default:100*/);
}

document.querySelector('#speedUp').addEventListener('click', function() {
    if(gameSpeed > 10)
    {
        gameSpeed -= 10;
    }

    storeData();
    document.querySelector('#gameSpeed').value = `gameSpeed : ${gameSpeed} ms \n(다음 판에 적용됨)`;
});

document.querySelector('#speedDown').addEventListener('click', function() {
    gameSpeed += 10;

    storeData();
    document.querySelector('#gameSpeed').value = `gameSpeed : ${gameSpeed} ms \n(다음 판에 적용됨)`;
});

document.querySelector('#reset').addEventListener('click', function() {
    scoreOfPlayer1 = 0;
    scoreOfPlayer2 = 0;

    storeData();

    document.querySelector('#scoreArea').value = `${scoreOfPlayer1} - ${scoreOfPlayer2}`;
});

////////////////////////////////////////////////////////////
// top : 100 px 
// score

////////////////////////////////////////////////////////////
// middle : 200 px
// : play
document.addEventListener('keypress', function(e){
    let outputLog = ``;
    const keyCode = e.keyCode;
    let playerNumber = 0;

    shadowOfPlayer1[0] = player1[0];
    shadowOfPlayer1[1] = player1[1];
    shadowOfPlayer2[0] = player2[0];
    shadowOfPlayer2[1] = player2[1];

    console.log(`keyCode : ${keyCode}`);
    switch(keyCode)
    {
        // player 1

        case 32:
        {
            startGame();
            break;
        }
        case 119 :
        case 12616 : // up (w)
        {
            console.log('key pressed : up');
        //     if(player1[1] > canvasMin[1])
        //     {
        //         player1[1] -= 10;
        //     }
        //     playerNumber = 1;
        //     movePlayer(playerNumber);
            break;
        }
        case 97 :
        case 12609 :// left (a)
        {
            outputLog += `key pressed : left\n`;
            if(player1[0] > player1MinX[0])
            {
                player1[0] -= 10;
            }
            playerNumber = 1;
            movePlayer(playerNumber);
            break;
        }
        case 115 :
        case 12596 : // down (s)
        {
        //     console.log('key pressed : down');
        //     if(player1[1] < canvasMax[1])
        //     {
        //         player1[1] += 10;
        //     }
        //     playerNumber = 1;
        //     movePlayer(playerNumber);
            break;
        }
        case 100 :
        case 12615 :// right (d)
        {
            outputLog += `key pressed : right\n`;
            if( player1[0] < player1MinX[1])
            {
                player1[0] += 10;
            }
            playerNumber = 1;
            movePlayer(playerNumber);
            break;
        }

        // player 2

        case 105:
        case 12625:
        {
            break;
        }
        case 106:
        case 12627:
        {
            outputLog += `key pressed : left\n`;
            if(player2[0] > player2MinX[0])
            {
                player2[0] -= 10;
            }
            playerNumber = 2;
            movePlayer(playerNumber);
            break;
        }
        case 107:
        case 12623:
        {
            break;
        }
        case 108:
        case 12643:
        {
            outputLog += `key pressed : right\n`;
            if( player2[0] < player2MinX[1])
            {
                player2[0] += 10;
            }
            playerNumber = 2;
            movePlayer(playerNumber);
            break;
        }
        default :
        {
            outputLog += `[not defined] key pressed\n`;
            break;
        }
    }

    outputLog += `keyCode : ${keyCode} (x : ${player1[0]} , y : ${player1[1]})\n`;
    document.querySelector('#console').value = outputLog;
    // graphic


});

// : start // enter key
// - move the ball

// : pause // space key
// - stop the ball

// : get the point // 15 - 0, 15 - 14 => win player 1

// : end

////////////////////////////////////////////////////////////
// bottom : 100 px
// for Debug

////////////////////////////////////////////////////////////
// logic
// : spike
// : toss
// : area
// : 3 object - player 1, player 2, ball

////////////////////////////////////////////////////////////
// variables
let retInterval = 0;
const canvasMin = [0, 0];
const canvasMax = [290, 140];
const player1MinX = [0, 130];
const player2MinX = [160, 290];

const sizeOfPixel = 10;
let player1 = [0, 0];
let shadowOfPlayer1 = [0, 0]; // clear 할 때 필요하다
const colorOfPlayer1 = [255, 0, 0];
let player2 = [0, 0];
let shadowOfPlayer2 = [0, 0];
const colorOfPlayer2 = [0, 0, 255];
let ball = [0, 0];
let shadowOfBall = [0, 0];
const colorOfBall = [100, 100, 100];
let ballDirection = 0;
    // 0 1 2    ↖ ↑ ↗
    // 3 4 5    ← 0 →
    // 6 7 8    ↙ ↓ ↘

const volleyballNet = [140, 130, 150, 140]; // [x0, y0, x1, y1]

let scoreOfPlayer1 = 0;
let scoreOfPlayer2 = 0;

let gameSpeed = 100; // 0.1 sec
const gameOverScore = 11;

// canvas
function getCanvasContext(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    return ctx;
}

function canvasDraw(position, rgb){
    const ctx = getCanvasContext();

    // draw
    ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    ctx.fillRect (position[0], position[1], sizeOfPixel, sizeOfPixel);
}

function canvasClear(position){
    const ctx = getCanvasContext();

    console.log(`[canvasClear] position : ${position}`);
    // clear
    ctx.clearRect(position[0], position[1], sizeOfPixel, sizeOfPixel);
}

function movePlayer(playerNumber){
    switch(playerNumber)
    {
        case 1 :
        {
            colorOfPlayer1[0] = Math.floor((Math.random() * 255)) * 5;
            canvasClear(shadowOfPlayer1);
            canvasDraw(player1, colorOfPlayer1);
            break;

        }
        case 2 :
        {
            colorOfPlayer2[2] = Math.floor((Math.random() * 255)) * 5;
            canvasClear(shadowOfPlayer2);
            canvasDraw(player2, colorOfPlayer2);
            break;

        }
        default :
        {
            console.log(`movePlayer error`);
            break;
        }
    }
}

function moveBall() {
    // set ball color
    colorOfBall[0] = Math.floor((Math.random() * 255)) * 0; // red
    colorOfBall[1] = Math.floor((Math.random() * 255)) * 4; // green
    colorOfBall[2] = Math.floor((Math.random() * 255)) * 2; // blue

    // set shadow
    shadowOfBall[0] = ball[0];
    shadowOfBall[1] = ball[1];

    switch (ballDirection) {
        case 0: // ↖ [exception] center bar hit case
            {
                canvasClear(shadowOfBall);
                // center bar hit case
                if(
                    ((ball[0] - sizeOfPixel) === volleyballNet[2])
                    && ((volleyballNet[1] <= ball[1]) && (ball[1] <= volleyballNet[3]) )
                    )
                {
                    ballDirection = 2; // ↗
                }
                else
                {
                    // x
                    if(ball[0] > canvasMin[0])
                    {
                        ball[0] -= 10;
                    }
                    else
                    {
                        ballDirection = 2; // ↗
                    }
                    // y
                    if(ball[1] > canvasMin[1])
                    {
                        ball[1] -= 20;
                    }
                    else
                    {
                        ballDirection = 6; // ↙
                    }
                }
                canvasDraw(ball, colorOfBall);
                break;
            }
        case 1: // ↑
            {
                break;
            }
        case 2: // ↗ [exception] center bar hit case
            {
                canvasClear(shadowOfBall);
                // center bar hit case
                if (
                    ((ball[0] + sizeOfPixel) === volleyballNet[0])
                    && ((volleyballNet[1] <= ball[1]) && (ball[1] <= volleyballNet[3]))
                ) {
                    ballDirection = 0; // ↖
                }
                else {
                    // x
                    if (ball[0] < canvasMax[0]) {
                        ball[0] += 10;
                    }
                    else {
                        ballDirection = 0; // ↖
                    }
                    // y
                    if (ball[1] > canvasMin[1]) {
                        ball[1] -= 20;
                    }
                    else {
                        ballDirection = 8; // ↘
                    }
                }
                canvasDraw(ball, colorOfBall);
                break;
            }
        case 3: // ←
            {
                break;
            }
        case 4: // 0
            {
                break;
            }
        case 5: // →
            {
                break;
            }
        case 6: // ↙ [exception] player hit case, center bar hit case, game over
            {
                canvasClear(shadowOfBall);
                // game over
                if ((ball[1] === canvasMax[1]))
                {
                    if(player1MinX[0] <= ball[0] && ball[0] <= player1MinX[1])
                    {
                        scoreOfPlayer2++;
                    }
                    else if (player2MinX[0] <= ball[0] && ball[0] <= player2MinX[1]) {
                        scoreOfPlayer1++;
                    }

                    if ( scoreOfPlayer1 >= gameOverScore)
                    {
                        document.querySelector('#scoreArea').value = `player 1 win !!!!!`;
                    }
                    else if (scoreOfPlayer2 >= gameOverScore)
                    {
                        document.querySelector('#scoreArea').value = `player 2 win !!!!!`;
                    }
                    else
                    {
                        document.querySelector('#scoreArea').value = `${scoreOfPlayer1} - ${scoreOfPlayer2}`;
                    }

                    stopGame();
                }
                // center bar hit case
                else if(
                    ((ball[0] - sizeOfPixel) === volleyballNet[2])
                    && (((volleyballNet[1] - sizeOfPixel) <= ball[1]) && (ball[1] <= volleyballNet[3]) )
                    )
                {
                    ballDirection = 8; // ↘
                }
                else if(
                    (((ball[1] + sizeOfPixel) === volleyballNet[1]) || ((ball[1] + sizeOfPixel) === volleyballNet[3]))
                    && ((volleyballNet[0] <= ball[0]) && (ball[0] <= volleyballNet[2]) )
                    )
                {
                    ballDirection = 0; // ↖
                }
                // player hit
                else if(
                    (
                    (
                        ((ball[0] + sizeOfPixel) === player1[0]) 
                        || ((ball[0]) === player1[0]) 
                        || ((ball[0] - sizeOfPixel) === player1[0]) 
                        || ((ball[0] - (2 * sizeOfPixel)) === player1[0]) 
                    )

                && ((ball[1] + sizeOfPixel) === player1[1])
                )
                ||
                (
                    (
                        ((ball[0] + sizeOfPixel) === player2[0]) 
                        || ((ball[0]) === player2[0]) 
                        || ((ball[0] - sizeOfPixel) === player2[0]) 
                        || ((ball[0] - (2 * sizeOfPixel)) === player2[0]) 
                    )

                && ((ball[1] + sizeOfPixel) === player2[1])
                )
                ) 
                {
                    ballDirection = 0; // ↖
                }
                else
                    {
                    if(ball[0] > canvasMin[0])
                    {
                        ball[0] -= 10;
                    }
                    else
                    {
                        ballDirection = 8;
                    }
                    if(ball[1] < canvasMax[1])
                    {
                        ball[1] += 10;
                    }
                    else
                    {
                        ballDirection = 0;
                    }
                }
                canvasDraw(ball, colorOfBall);
                break;
            }
        case 7: // ↓
            {
                break;
            }
        case 8: // ↘ [exception] player hit case, center bar hit case, game over
            {
                canvasClear(shadowOfBall);
                // game over
                if ((ball[1] === canvasMax[1])) {
                    if(player1MinX[0] <= ball[0] && ball[0] <= player1MinX[1])
                    {
                        scoreOfPlayer2++;
                    }
                    else if (player2MinX[0] <= ball[0] && ball[0] <= player2MinX[1]) {
                        scoreOfPlayer1++;
                    }

                    if ( scoreOfPlayer1 >= gameOverScore)
                    {
                        document.querySelector('#scoreArea').value = `player 1 win !!!!!`;
                    }
                    else if (scoreOfPlayer2 >= gameOverScore)
                    {
                        document.querySelector('#scoreArea').value = `player 2 win !!!!!`;
                    }
                    else
                    {
                        document.querySelector('#scoreArea').value = `${scoreOfPlayer1} - ${scoreOfPlayer2}`;
                    }

                    stopGame();
                }
                // center bar hit case
                else if (
                    ((ball[0] + sizeOfPixel) === volleyballNet[0])
                    &&
                    (
                        ((volleyballNet[1] - sizeOfPixel) <= ball[1])
                        &&
                        (ball[1] <= volleyballNet[3])
                    )
                ) 
                {
                    ballDirection = 6; // ↙
                }
                else if(
                    (((ball[1] + sizeOfPixel) === volleyballNet[1]) || ((ball[1] + sizeOfPixel) === volleyballNet[3]))
                    && ((volleyballNet[0] <= ball[0]) && (ball[0] <= volleyballNet[2]) )
                    )
                {
                    ballDirection = 2; // ↗
                }
                // player hit
                else if(
                    (
                        (
                            ((ball[0] + sizeOfPixel) === player1[0]) 
                            || ((ball[0]) === player1[0]) 
                            || ((ball[0] - sizeOfPixel) === player1[0]) 
                            || ((ball[0] - (2 * sizeOfPixel)) === player1[0]) 
                        )
                        && ((ball[1] + sizeOfPixel) === player1[1])
                    )
                ||
                    (   
                        (
                            ((ball[0] + sizeOfPixel) === player2[0]) 
                            || ((ball[0]) === player2[0]) 
                            || ((ball[0] - sizeOfPixel) === player2[0]) 
                            || ((ball[0] - (2 * sizeOfPixel)) === player2[0]) 
                        )
                        && ((ball[1] + sizeOfPixel) === player2[1])
                    )
                ) 
                {
                    ballDirection = 2; // ↗
                }
                else
                {
                    if(ball[0] < canvasMax[0])
                    {
                        ball[0] += 10;
                    }
                    else
                    {
                        ballDirection = 6; // ↙
                    }
                    if(ball[1] < canvasMax[1])
                    {
                        ball[1] += 10;
                    }
                    else
                    {
                        ballDirection = 2; // ↗
                    }
                }
                canvasDraw(ball, colorOfBall);
                break;
            }
        default:
            {
                break;
            }
    }
}
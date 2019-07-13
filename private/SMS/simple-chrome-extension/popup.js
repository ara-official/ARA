function dataMatching(inputData)
{
    getInternetSpeed();

    document.querySelector('#user_mirror').innerText = inputData;

    if (inputData !== null) {
        // chrome extension 기능의 tab 과 관련된 기능 중에, content page 를 대상으로 code 를 실행해 주세요.
        chrome.tabs.executeScript(
            { code: 'document.querySelector("body").innerText' }
            , function (result) { // 위 code 수행 결과를 담아옴
                if(typeof(result) === undefined || typeof(result[0]) === undefined)
                {
                    return;
                }
                var bodyText = result[0];
                // console.log("bodyText : " + bodyText);
    
                let bodyNum = bodyText.split(' ').length;
                // console.log("bodyNum : " + bodyNum);
                // alert(bodyNum);
    
                // let filteredResult = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi'));
                // alert("[DBG] inputData : " + inputData);

                // 한글 검색이 되도록 하려면, 한글 검색 위한 정규표현식 짜야 함.
                // 정규표현식
                // \b 는 아마 boundary
                let regExp = new RegExp('\\b(' + inputData + ')\\b', 'gi');
                // alert("regExp : " + regExp);
                // let filteredResult = bodyText.match(new RegExp('\\b(' + inputData + ')\\b', 'gi'));
                let filteredResult = bodyText.match(regExp);
                // alert("[DBG] filteredResult : " + filteredResult);
    
                if (filteredResult === null) {
                    document.querySelector('#result').innerText = '0 / ' + bodyNum + ' ( 0 %)';
                }
                else {
                    let myNum = filteredResult.length;
                    // console.log("myNum : " + myNum);
    
                    let percentage = myNum / bodyNum * 100;
                    percentage = percentage.toFixed(2); // 소수점 2째 자리 고정
                    document.querySelector('#result').innerText = myNum + ' / ' + bodyNum + ' ( ' + percentage + ' %)';
                }
    
                // console.log(bodyText);
                document.querySelector('#result_body').innerText = bodyText;
            }
        );
    }
}

// chrome extension 실행 시, 이전 data 불러 오기
let retInterval;
chrome.storage.sync.get(function(data){
    let inputData = data.userWords;
    document.querySelector('#console').value = inputData;

    console.log("data.storageImgData : " + data.storageImgData);
    // 분석해서 그 결과를 넣어주세요. (아래 code 와 동일) 
    if(data.storageImgData !== undefined)
    {
        drawImage(data.storageImgData);
    }

    retInterval = setInterval(moveBullet/*function*/, 1000 * interval/*interval*/);

});

// content page 내, #user에 입력된 값이 변경되었을 때
document.querySelector('#console').addEventListener('change', function () {
    // content page 에 몇 개의 단어가 등장하는지 계산해주세요
    let user = document.querySelector('#console').value;

    // chrome storage 에 입력 값을 저장한다. (login 시 사용자가 입력한 정보 저장 됨)
    chrome.storage.sync.set({
        userWords: user
    })

});

// top
// button click
document.querySelector('#up').addEventListener('click', function() {
    console.log('click up');
    if(y > 0)
    {
        y -= 10;
    }
    canvasControl(x, y);
    document.querySelector('#console').value = "(x : " + x + ", y : " + y + ")";
});

document.querySelector('#down').addEventListener('click', function() {
    console.log('click down');
    if(y < maxY)
    {
        y += 10;
    }
    canvasControl(x, y);
    document.querySelector('#console').value = "(x : " + x + ", y : " + y + ")";
});

document.querySelector('#left').addEventListener('click', function() {
    console.log('click left');
    if(x > 0)
    {
        x -= 10;
    }
    canvasControl(x, y);
    document.querySelector('#console').value = "(x : " + x + ", y : " + y + ")";
});

document.querySelector('#right').addEventListener('click', function() {
    console.log('click right');
    if( x < maxX)
    {
        x += 10;
    }
    canvasControl(x, y);
    document.querySelector('#console').value = "(x : " + x + ", y : " + y + ")";
});



let interval = 1;
let red = 1;
let green = 1;
let blue = 1;
document.querySelector('#interval').addEventListener('change', function(){
    console.log('interval');
    interval = document.querySelector('#interval').value;

    clearInterval(retInterval);
    retInterval = setInterval(moveBullet/*function*/, 1000 * interval/*interval*/);
});

document.querySelector('#start').addEventListener('click', function(){
    console.log('start');
    
    retInterval = setInterval(moveBullet/*function*/, 1000 * interval/*interval*/);

    console.log("retInterval : " + retInterval);

    imgData = getImage();
    console.log("imgData : " + imgData);
    chrome.storage.sync.set({
        storageImgData: imgData
    })
});

document.querySelector('#stop').addEventListener('click', function(){
    console.log('stop');

    clearInterval(retInterval);
});

document.querySelector('#red').addEventListener('change', function(){
    console.log('red');
    red = document.querySelector('#red').value;
});
document.querySelector('#green').addEventListener('change', function(){
    console.log('green');
    green = document.querySelector('#green').value;
});
document.querySelector('#blue').addEventListener('change', function(){
    console.log('blue');
    blue = document.querySelector('#blue').value;
});

document.querySelector("#sizeup").addEventListener('click', function(){
    console.log('sizeup');
    xySize += 10;
});

document.querySelector("#sizedown").addEventListener('click', function(){
    console.log('sizedown');
    if(xySize > 10)
    {
        xySize -= 10;
    }
});

let xySize = 10;
function canvasControl(x, y){
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    // clear
    ctx.clearRect(shadowX, shadowY, xySize, xySize);

    // draw
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect (x, y, xySize, xySize);
    shadowX = x;
    shadowY = y;
}

let bulletX = 0;
let bulletY = 0;
let colorR = 0;
let colorG = 0;
let colorB = 0;
let colorRange = 255;

let imgData = null;
function getImage()
{
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    imgData = ctx.toDataURL();

    return imgData;
}
function drawImage(img)
{
    console.log('drawImage');

    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, maxX, maxY);
}
function moveBullet() 
{
    bulletX = Math.floor((Math.random() * ((maxX + width) / width))) * width;
    bulletY = Math.floor((Math.random() * ((maxY + height) / height))) * height;
    
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    let xySize = 10;
    colorR = Math.floor((Math.random() * colorRange)) * red;
    colorG = Math.floor((Math.random() * colorRange)) * green;
    colorB = Math.floor((Math.random() * colorRange)) * blue;
    ctx.fillStyle = "rgb("+colorR+","+colorG+","+colorB+")";
    ctx.fillRect (bulletX, bulletY, xySize, xySize);
}

let x = 0;
let y = 0;
let width = 10;
let height = 10;
let maxX = 290;
let maxY = 140;
let shadowX = 0;
let shadowY = 0;
// input key
document.addEventListener('keypress', function(e){
    let keyCode = e.keyCode;

    if(keyCode === 119 || keyCode === 12616 ) // up (w)
    {
        console.log('key pressed : up');
        if(y > 0)
        {
            y -= 10;
        }
    }
    else if(keyCode === 97 || keyCode === 12609) // left (a)
    {
        console.log('key pressed : left');
        if(x > 0)
        {
            x -= 10;
        }
    }
    else if(keyCode === 115 || keyCode === 12596) // down (s)
    {
        console.log('key pressed : down');
        if(y < maxY)
        {
            y += 10;
        }
    }
    else if(keyCode === 100 || keyCode === 12615) // right (d)
    {
        console.log('key pressed : right');
        if( x < maxX)
        {
            x += 10;
        }
    }
    else if(keyCode === 105 || keyCode === 12625) // item (i)
    {
        console.log('key pressed : 아이템창');
    }
    else if(keyCode === 44) // 줍기 (,)
    {
        console.log('key pressed : 아이템 줍기');
    }
    else if(keyCode === 32) // 공격 (spacebar)
    {
        console.log('key pressed : 공격');
    }
    else
    {
        console.log('[not defined] key pressed : ' + keyCode);
    }

    // graphic
    canvasControl(x, y);

    document.querySelector('#console').value = keyCode + "(x : " + x + ", y : " + y + ")";
});


// console.log("bodyText : " + bodyText);
// //bodyText의 모든 단어를 추출하고, 그 단어의 숫자를 센다. 그 결과를 bodyNum이라는 변수에 담는다.
// var b
// //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 myNum이라는 변수에 담는다.
// // var myNum = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi')).length;
// // myNum+'/'+bodyNum +'('+ (myNum/bodyNum*100)+'%)';
// content page 내, #user에 입력된 값이 변경되었을 때
document.querySelector('#user').addEventListener('change', function () {
    // content page 에 몇 개의 단어가 등장하는지 계산해주세요
    let user = document.querySelector('#user').value;

    if (user !== null) {
        // chrome extension 기능의 tab 과 관련된 기능 중에, content page 를 대상으로 code 를 실행해 주세요.
        chrome.tabs.executeScript(
            { code: 'document.querySelector("body").innerText' }
            , function (result) { // 위 code 수행 결과를 담아옴
                var bodyText = result[0];

                // console.log("bodyText : " + bodyText);

                let bodyNum = bodyText.split(' ').length;

                // console.log("bodyNum : " + bodyNum);

                // alert(bodyNum);
                // let inputTextValue = document.querySelector('#inputText').innerText;

                // console.log("inputTextValue : " + inputTextValue);

                // let filteredResult = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi'));
                let filteredResult = bodyText.match(new RegExp('\\b(' + user + ')\\b', 'gi'));

                // console.log("filteredResult : " + filteredResult);

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
});





// console.log("bodyText : " + bodyText);
// //bodyText의 모든 단어를 추출하고, 그 단어의 숫자를 센다. 그 결과를 bodyNum이라는 변수에 담는다.
// var b
// //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 myNum이라는 변수에 담는다.
// // var myNum = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi')).length;
// // myNum+'/'+bodyNum +'('+ (myNum/bodyNum*100)+'%)';
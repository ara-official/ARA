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
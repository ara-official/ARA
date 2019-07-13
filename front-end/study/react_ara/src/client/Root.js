import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/App';
import '../css/Root.css';

import { Provider } from 'react-redux';
import store from '../store';

var a = 1;

class Root extends React.Component{

    javascript = () => {
        // javascript
        const a = 2;
        console.log(Math.pow(a, 2));
        console.log("hi\nhi\nhi");
        // alert(typeof "1");
        console.log("이 문자열의 길이".length);

        // const id = prompt('입력하세요');
        // if(id === '민식')
        // {
        //     alert('hi ' + id);
        // }

        // if(!''){
        //     alert('빈 문자열')
        // }
        // if(!undefined){
        //     alert('undefined');
        // }
        // var b;
        // if(!b){
        //     alert('값이 할당되지 않은 변수'); 
        // }
        // if(!null){
        //     alert('null');
        // }
        // if(!NaN){
        //     alert('NaN');
        // }

        document.write('coding everybody <br />');

        function get_members(){
            return ['egoing', 'k8805', 'sorialgi'];
        }
        let members = get_members();
        // members.length는 배열에 담긴 값의 숫자를 알려준다. 
        for(let i = 0; i < members.length; i++){
            // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
            document.write(members[i].toUpperCase());   
            document.write('<br />');
        }

        let arr = ['a','b','c','d','e'];
        document.write(arr + '<br />');

        // arr.shift();
        // document.write(arr + '<br />');

        // arr.pop();
        // document.write(arr + '<br />');


        arr.splice(2, 0, 'hi');
        document.write(arr + '<br />');

        alert(a);
        alert(window.a);
    }

    render(){
        const obj1 = {
            'list' : {'son': 10, 'min' : 20, 'sik' : 30},
            'show' : function(){
                document.write('test');
            }
        }
        return(
            // Tag? 사용해야하는 영역?
            //
            // <div className="Root">
            //         {console.log('ⓙⓢ Root.js START')}
            //         <BrowserRouter>
            //         <Provider store={store}>
            //         <App/>
            //         </Provider>
            //         </BrowserRouter>
            //         {console.log('ⓙⓢ Root.js END')}
            // </div>
            <div>
                <input id="test" value="test"/>
                {this.javascript()}
                {obj1.show()}
            </div>
        );
    }
};

export default Root;
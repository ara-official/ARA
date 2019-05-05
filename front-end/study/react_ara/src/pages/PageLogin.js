import React from 'react';
import '../css/PageLogin.css';
import {Link} from 'react-router-dom';

import LoginGoogle from '../components/login/LoginGoogle';

class PageLogin extends React.Component 
{
    responseGoogle = (res) => {
        console.log("res : " + res);
    }

    responseFail = (err) => {
        console.log("err : " + err);
    }


    render() {
        return(
            <div className="PageLogin">
                <div className="top">
                    <Link to="/">
                        <button id="closeButton">X</button>
                    </Link>
                    <div id="title">로그인</div>
                </div>
                <div className="PageLogin_middle">
                    <button id="facebookLoginButton">facebook Login</button>
                    
                    <LoginGoogle id="googleLoginButton"/>
                </div>
                <div className="bottom">
                    <Link to="/">
                        <button id="button" >
                            결과 보기
                        </button> 
                    </Link>
                </div>
            </div>
        );
    }
}

export default PageLogin;
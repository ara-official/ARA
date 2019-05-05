import React from 'react';
import {GoogleLogin} from 'react-google-login';

class LoginGoogle extends React.Component
{
    responseGoogle = (res) => {
        console.log("res : " + res);
    }

    responseFail = (err) => {
        console.log("err : " + err);
    }

    render() {
        return(
            <div>
                <GoogleLogin
                    // clientId={process.env.REACT_APP_Google}
                    clientId="772840463559-tvjmrtd4nf670btetmo3upcv19kj9jet.apps.googleusercontent.com"
                    buttonText="구글 로그인"
                    onSuccess={this.responseGoogle}
                    onFailue={this.responseFail}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
}

export default LoginGoogle;
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/PageProfile.css';

class PageProfile extends React.Component{
    render(){
        const pageName = "Profile Page";
        return(
            <div className="PageProfile">
                <div className="top">
                    <Link to="/"><img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/></Link>
                    {pageName}
                </div>
                <div className="middle">
                
                </div>
                <div className="bottom">
                    <div id="id_1">안녕하세요, 저는 ***입니다.</div>
                    <div id="id_2">소개</div>
                    <div id="id_3">***님의 인증내역</div>
                    <div id="id_4">후기</div>
                </div>


            </div>
        );
    }
}

export default PageProfile;
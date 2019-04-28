import React from 'react';

import logoImage from '../img/ara_logo_3.png';

import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/PageProfile.css';

class PageProfile extends React.Component{
    render(){
        const pageName = "Profile Page";
        return(
            <div className="PageProfile">
                <div className="top">
                    <Link to="/"><img id="logo" alt='imsi_logo' src={logoImage}/></Link>
                    <div id="pageName">{pageName}</div>
                </div>
                {/* <div className="middle">
                </div> */}
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
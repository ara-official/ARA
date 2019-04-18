import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Global.css';
import '../css/PageContent.css';

class PageContent extends React.Component{
    render(){
        return(
            <div className="PageContent">
                <div className="top">
                <Link to="/"><img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/></Link>
                <input 
                id="searchBar" 
                placeholder="목적지 입력"
                value={this.props.input}
                onChange={this.props.handleChange}
                onKeyPress={this.props.handleKeyPress}
                />
                </div>

                <div className="middle">
                {'middle'}
                </div>

                <div className="bottom">
                        <div id="contentImg">
                            <img id="contentImgSelf" src="https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true"/>
                            {/* <img id="contentImgSelf" alt='imsi_img' src={imgSrc}/> */}
                        </div>
                        <div id="contentInfor">
                            {/* <li>[id] : {id}</li> */}
                            <div id="contentInforFirst">
                                {/* {nickName} · {phone} */}
                                {'알*고 · 010-3223-****'}
                            </div>
                            <div id="contentTitle">
                                {/* #{id} : {title} */}
                                {/* {title} */}
                                {'강남 쉐이크쉑 같이 드실 1~2 분 구해요~'}
                            </div>
                            {/* {address}<br/> */} 
                            <div id="contentInforThird">
                                {/* {destination} · {perpose} */}
                                {'강남 · 점심식사'}
                            </div>
                            <button id="button">
                                확정하기
                            </button>
                        </div>
                </div>
            </div>
        );
    }
}

export default PageContent;
import React from 'react';

import backImage from '../img/back.png';

import {Link} from 'react-router-dom';

import '../css/Global.css';
import '../css/PageContent.css';

class PageContent extends React.Component{
    handleUpdate = (e) => {
        // e.preventDefault();
        this.props.setCount(this.props.count - 1);
        this.props.update(this.props.storeInfo.db_id);
        // this.props.remove();
    }
    render(){
        console.log('ⓙⓢ PageContent render() START');
        return(
            <div className="PageContent">
                <div className="top">
                    <Link to="/MapAndList"><img id="backImage" alt='imsi_logo' src={backImage}/></Link>
                    <div style={{marginLeft: "50px"}}>[id] : {this.props.storeInfo.id}, [db_id] : {this.props.storeInfo.db_id}</div>
                </div>

                {/* <div className="middle">
                </div> */}
                <div className="bottom">
                        <div id="contentImg">
                            <img id="contentImgSelf" alt='imsi_logo' src={this.props.storeInfo.image_path}/>
                            {/* <img id="contentImgSelf" alt='imsi_img' src={imgSrc}/> */}
                        </div>
                        <div id="contentInfor">
                            <div id="contentTitle">
                                {/* #{id} : {title} */}
                                {/* {title} */}
                                {this.props.storeInfo.title}
                            </div>
                            <div id="contentInforFirst">
                                {/* {nickName} · {phone} */}
                                {this.props.storeInfo.region + ' · ' +this.props.storeInfo.perpose}
                            </div>
                            
                            {/* {address}<br/> */} 
                            <div id="contentInforThird">
                                {/* {destination} · {perpose} */}
                                {this.props.storeInfo.nick_name + ' · ' + this.props.storeInfo.phone_number}
                            </div>
                        </div>
                        <div className="contentBottom">
                            <div id="num_of_people">인원 : {this.props.storeInfo.num_of_people}</div>
                            <Link to="/MapAndList">
                                <button id="button" onClick={this.handleUpdate}>
                                    정하기
                                </button>
                            </Link>
                        </div>
                </div>
                {console.log('ⓙⓢ PageContent render() END')}
            </div>
        );
    }
}

export default PageContent;
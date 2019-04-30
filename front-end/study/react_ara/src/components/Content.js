import React, {Component} from 'react';
import '../css/Content.css';

import { Link } from 'react-router-dom';

import the_end_image from '../img/the_end.png';

class Content extends Component {
    handleOnClick = (e) => {
        // e.preventDefault(); // Link to 가 동작해야 함
        // 여기서 현재 Content의 정보를 PageContent에서 사용할 수 있도록 store? 로 넘기자.

        // const { title } = this.props.info.toJS();
        this.props.setContentData(this.props.info);
        console.log('store 내의 destination : ' + this.props.info + ' (<- 아마 즉시 store가 update 되는건 아니라서 그런가봄');
    }

    render() {
        console.log('START Content.js render()');
        // id: 1,
        // title: '경복궁 네 명 모아 봅니다.',
        // meeting_date: '10/10',
        // region: '경복궁',
        // num_of_people: 0,
        // nick_name: '최*훈',
        // phone_number: '010-3493-****',
        // perpose: '관광, 기타',
        // image_path: 
        const {
            title, region, nick_name, phone_number, perpose, image_path, closed
            // id, address
        } = this.props.info.toJS();
        if(closed === false){
            return(
                <Link to="/MapAndList/Content" 
                    style={{textDecoration : 'none', color: 'black'}} 
                    onClick={this.handleOnClick}
                >
                    {/* {console.log('closed === false')} */}
                    <div className="Content" >
                        <div id="contentImg">
                            {/* <img id="contentImgSelf" src="https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true"/> */}
                            <img id="contentImgSelf" alt='imsi_img' src={image_path}/>
                        </div>
                        <div id="contentInfor">
                                {/* <li>[id] : {id}</li> */}
                                <div id="contentInforFirst">
                                    {nick_name} · {phone_number}
                                </div>
                                <div id="contentTitle">
                                    {/* #{id} : {title} */}
                                    {title}
                                </div>
                                {/* {address}<br/> */} 
                                <div id="contentInforThird">
                                    {region} · {perpose}
                                </div>
                        </div>
                    </div>
                </Link>
            );
        }
        else{
            return(
                <div 
                    style={{textDecoration: 'line-through', color: 'black'}} 
                >
                    {/* {console.log('closed === true')} */}
                    <div className="Content" >
                        <div id="contentImg">
                            <img id="contentImgSelf" alt='imsi_img' src={the_end_image}/>
                            {/* <img id="contentImgSelf" alt='imsi_img' src={image_path}/> */}
                        </div>
                        <div id="contentInfor">
                                {/* <li>[id] : {id}</li> */}
                                <div id="contentInforFirst">
                                    {nick_name} · {phone_number}
                                </div>
                                <div id="contentTitle">
                                    {/* #{id} : {title} */}
                                    {title}
                                </div>
                                {/* {address}<br/> */} 
                                <div id="contentInforThird">
                                    {region} · {perpose}
                                </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Content;
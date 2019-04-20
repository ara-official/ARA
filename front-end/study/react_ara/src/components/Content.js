import React, {Component} from 'react';
import '../css/Content.css';

import { Link } from 'react-router-dom';

class Content extends Component {
    handleOnClick = (e) => {
        // e.preventDefault(); // Link to 가 동작해야 함
        // 여기서 현재 Content의 정보를 PageContent에서 사용할 수 있도록 store? 로 넘기자.
        this.props.setContentData(this.props.info);
        console.log('store 내의 destination : ' + this.props.destination + ' (<- 아마 즉시 store가 update 되는건 아니라서 그런가봄');
    }

    render() {
        const {
            title, destination, nickName, phone, perpose, imgSrc
            // id, address
        } = this.props.info;

        return(
            <Link to="/MapAndList/PageContent" 
                style={{textDecoration : 'none', color: 'black'}} 
                onClick={this.handleOnClick}
            >
                <div className="Content" >
                    <div id="contentImg">
                        {/* <img id="contentImgSelf" src="https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true"/> */}
                        <img id="contentImgSelf" alt='imsi_img' src={imgSrc}/>
                    </div>
                    <div id="contentInfor">
                            {/* <li>[id] : {id}</li> */}
                            <div id="contentInforFirst">
                                {nickName} · {phone}
                            </div>
                            <div id="contentTitle">
                                {/* #{id} : {title} */}
                                {title}
                            </div>
                            {/* {address}<br/> */} 
                            <div id="contentInforThird">
                                {destination} · {perpose}
                            </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Content;
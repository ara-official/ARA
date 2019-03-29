import React, {Component} from 'react';
import '../css/Content.css';

class Content extends Component {
    static defaultProps = {
        info: {
            id: 0,
            destination: '',
            nickName: 'name',
            address: '',
            phone: '000-0000-0000',
            perpose: '',
            imgSrc: ''
        }
    }
    state = {
        nickName: 'name',
        address: '',
        phone: '000-0000-0000',
        perpose: ''
    }

    render() {
        const {
            id, title, destination, nickName, address, phone, perpose, imgSrc
        } = this.props.info;

        return(
            <div className="Content">
                {/* <h2>[Content.js]</h2> */}

                <div id="contentImg">
                    {/* <img id="contentImgSelf" src="https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true"/> */}
                    <img id="contentImgSelf" src={imgSrc}/>
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
        );
    }
}

export default Content;
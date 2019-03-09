import React, {Component} from 'react';
import 'css/Content.css';

class Content extends Component {
    static defaultProps = {
        info: {
            id: 0,
            nickName: 'name',
            address: '',
            phone: '000-0000-0000',
            perpose: ''
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
            id, title, nickName, address, phone, perpose
        } = this.props.info;

        return(
            <div className="Content">
                {/* <h2>[Content.js]</h2> */}
                <div id="contentImg">
                    <img id="contentImgSelf" src="https://avatars1.githubusercontent.com/u/47748609?s=200&v=4"/>
                </div>
                <div id="contentInfor">
                    <ul>
                        <li>[id] : {id}</li>
                        <li>[title] : {title}</li>
                        <li>[nickName] : {nickName}</li>
                        <li>[address] : {address}</li>
                        <li>[phone] : {phone}</li> 
                        <li>[perpose] : {perpose} </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Content;
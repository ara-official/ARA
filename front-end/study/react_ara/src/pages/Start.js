
import React from 'react'
import '../css/Global.css'
import '../css/Start.css'
import { Link } from 'react-router-dom';

class Start extends React.Component{
    state = {
        
    }
    render(){
        console.log('Start.js render() START');
        return(

            <div className="Start">
                <div className="top">
                    <Link to="/">
                        <img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/>
                    </Link>
                    <input 
                        id="searchBar" 
                        placeholder="목적지 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    <Link to="./Profile">
                        <button id="searchButton">사용자 정보</button>
                    </Link>
                </div>
                {console.log('Start.js render() END')}
            </div>
        );
    }
}   

export default Start;


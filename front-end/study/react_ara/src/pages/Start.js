
import React from 'react'

import logoImage from '../img/ara_logo_3.png';

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
                        {/* <img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/> */}
                        <img id="logo" alt='imsi_logo' src={logoImage}/>
                    </Link>
                    <input 
                        id="searchBar" 
                        placeholder="검색"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    {/* <Link to="./Profile"> */}
                    <Link to="./Login">
                        <button id="searchButton">로그인</button>
                    </Link>
                </div>
                {console.log('Start.js render() END')}
            </div>
        );
    }
}   

export default Start;



import React from 'react'
import '../css/Start.css'
import { Link } from 'react-router-dom';

class Start extends React.Component{
    handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            console.log('Enter !');
            
        }
    }
    render(){
        return(
            <div className="Start">
                <div className="top">
                    <Link to="./">
                        <img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/>
                    </Link>
                    <input 
                        id="searchBar" 
                        placeholder="목적지 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                    <Link to="./MapAndList">
                            <button id="searchButton" onClick={this.props.handleInsert}>검색</button>
                    </Link>
                </div>
            </div>
        );
    }
}   

export default Start;


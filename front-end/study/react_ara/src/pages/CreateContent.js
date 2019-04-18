import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/CreateContent.css';

class CreateContent extends React.Component{
    render(){
        const pageName = "CreateContent Page";
        console.log('CreateContent.js START');
        return (
            <div className="CreateContent">
                <div className="top">
                    <Link to="/">
                        <img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/>
                    </Link>
                    <div id="defaultStyle">
                        {pageName}
                    </div>
                </div>
                <div className="middle">
                </div>
                <div className="bottom">
                    <input 
                        id="title" 
                        placeholder="제목 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    <input 
                        id="meeting_date" 
                        placeholder="날짜 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    <input 
                        id="num_of_member" 
                        placeholder="참여명수 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    <Link to="/MapAndList">
                        <button id="searchButton">등록</button>
                    </Link>
                </div>
                {console.log('CreateContent.js render() END')}
            </div>
        );
    }
}

export default CreateContent;
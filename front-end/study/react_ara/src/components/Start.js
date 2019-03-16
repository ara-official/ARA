
import React from 'react'
import '../css/Start.css'
import { Link } from 'react-router-dom';
import MapAndList from './MapAndList';


class Start extends React.Component{
    render(){
        return(
            <div className="Start">
                <div className="top">
                    <Link to="./"><img id="logo" src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/></Link>
                    <input id="searchBar" placeholder="목적지 입력"/>
                    <Link to="./MapAndList"><button id="searchButton">검색</button></Link>
                </div>
            </div>
        );
    }
}   

export default Start;


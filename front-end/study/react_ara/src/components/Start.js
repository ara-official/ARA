
import React from 'react'
import '../css/Start.css'
import { Link } from 'react-router-dom';
// import MapAndList from './MapAndList';


class Start extends React.Component{
    state = {
        destination: ''
    }

    handleChange = (e) => {
        this.setState({
            destination: e.target.value
        })
    }

    render(){
        return(
            <div className="Start">
                <div className="top">
                    <Link to="./">
                        <img id="logo" src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/>
                    </Link>
                    <input 
                        id="searchBar" 
                        placeholder="목적지 입력" 
                        value={this.state.destination} 
                        onChange={this.handleChange}
                    />
                    {/* <Link to="./MapAndList"> */}
                    <Link to="./MapAndList">
                            <button id="searchButton" onClick={this.props.onIncrement} >검색</button>
                    </Link>
                </div>
                <div>
                test: {this.state.destination}
                </div>
                <div>
                counter : {this.props.receiveCount}
                </div>
            </div>
        );
    }
}   

export default Start;


import React from 'react'
import {NavLink} from 'react-router-dom';

class Start extends React.Component{
    render(){
        console.log('App.js render() START');
        return(
            <div>
                <h2>[Start.js]</h2>
                <NavLink exact to ={`/MapAndList/`} >MapAndList</NavLink>
                {console.log('App.js render() END')}
            </div>
        );
    }
}

export default Start;
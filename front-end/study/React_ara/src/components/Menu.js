import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    const styleComponent = {
        border: '1px solid black',
        padding: '8px',
        margin: '8px'
      };

    const activeStyle = {
        color: 'red',
        fontSize: '2rem'
    };

    return(
        <div style={styleComponent}>
            {/* <h2>[Menu.js]</h2> */}
            <ul>
                <li><NavLink exact to ="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to ="/about" activeStyle={activeStyle}>about</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
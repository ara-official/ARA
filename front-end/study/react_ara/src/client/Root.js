import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/App';
import '../css/Root.css';

class Root extends React.Component{
    render(){
        return(
            <div className="Root">
            <h2>[Root.js]</h2>
            {console.log('Root.js START')}
            <BrowserRouter>
                <App/>
            </BrowserRouter>
            {console.log('Root.js END')}
            </div>
        );
    }
};

export default Root;
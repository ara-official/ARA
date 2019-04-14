import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../shared/App';
import '../css/Root.css';

import { Provider } from 'react-redux';
import store from '../store';

class Root extends React.Component{
    
    render(){
        return(
            <div className="Root">
                    {console.log('Root.js START')}
                    <BrowserRouter>
                    <Provider store={store}>
                    <App/>
                    </Provider>
                    </BrowserRouter>
                    {console.log('Root.js END')}
            </div>
        );
    }
};

export default Root;
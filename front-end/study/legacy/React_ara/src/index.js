import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'css/index.css';
// import App from './App';
import Root from './client/Root';
import * as serviceWorker from './serviceWorker';
import MapAndList from './components/MapAndList';

ReactDOM.render(
<div>
    {/* <h2>[index.js]</h2> */}
    {console.log('./src/index.js START')}
    <Root />
    {console.log('./src/index.js END')}
</div>

, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

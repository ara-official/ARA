import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages';
import { MapAndList } from '../components';

// css
import '../css/App.css';

// sass
// import SassComponent from "SassComponent";

class App extends Component {
  render() {

    console.log('App.js render() START');
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/MapAndList" component={MapAndList}/>
        {/* <Route path="/create" component={Create}/> */}
        {/* <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch> */}
        {console.log('App.js render() END')}
      </div>
    );
  }
}

export default App;

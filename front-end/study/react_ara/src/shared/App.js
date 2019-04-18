import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import {Home, CreateContent, PageContent} from '../pages';
// import { MapAndList } from '../components';
// import StartContainer from '../containers/StartContainer';
import MapAndListContainer from '../containers/MapAndListContainer';

// css
import '../css/App.css';

// sass
// import SassComponent from "SassComponent";

class App extends Component {
  render() {
    console.log('App.js render() START');
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" render={() => <StartContainer props={this.props} />} /> */}
        <Route exact path={`/MapAndList/`} component={MapAndListContainer} />
        <Route exact path="/MapAndList/CreateContent" component={CreateContent} />
        <Route exact path="/MapAndList/PageContent" component={PageContent} />
         {/* <Route exact path={`/MapAndList/`} render={() => <MapAndListContainer props={this.props} />} /> */}
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

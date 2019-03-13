import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages';
import { MapAndList } from '../components';

// css
import '../css/App.css';

// sass
// import SassComponent from "SassComponent";

class App extends Component {
  static defaultProps = {
    hidden: true
}

handleOnClickButton = (bSwitch) =>{
    console.log('click button START');
    if(bSwitch === true)
    {
        console.log('1111');
      this.setState(() => ({hidden: bSwitch}));
    }
    else if(bSwitch === false)
    {
        console.log('2222');
      this.setState(() => ({hidden: bSwitch}));
    }

    console.log('props.hidden : ' + this.props.hidden);

    console.log('click button END');
  }

  render() {

    console.log('App.js render() START');
    return (
      <div className="App">
        <Route exact path="/" component={MapAndList} handleClick={this.handleOnClickButton} hidden={this.props.hidden} />
        <Route exact path={`/MapAndList/`} component={MapAndList} />
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

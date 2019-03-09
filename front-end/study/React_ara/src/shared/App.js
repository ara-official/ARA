import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Create, About } from 'pages';
import { Menu } from 'components';

// css
import logo from 'logo.svg'
import 'css/App.css';

// sass
import SassComponent from "SassComponent";

class App extends Component {
  render() {

    console.log('App.js render() START');
    return (
      <div className="App">
      {/* <h2>[App.js]</h2> */}
      {/* <header>
        <SassComponent/>
        <img src={logo} className="logo" alt="logo" />
        <p>&lt;p&gt; 태그는 paragraph, 즉 문단의 약자로, 하나의 문단을 만들 때 쓰입니다.</p>
        <p>px 단위는</p>
        <p>vmin : 1vmin == 1/100 size</p>
        <p>vhmin : 1vhmin == 1/100 height size. 100vh 까지 사용</p>
        <p>vhmin : 1vwmin == 1/100 height size.</p>
      </header> */}
        {/* <Menu/> */}

        <Route exact path="/" component={Home}/>
        <Route path="/create" component={Create}/>
        <Switch>
          <Route path="/about/:name" component={About}/>
          <Route path="/about" component={About}/>
        </Switch>
        {console.log('App.js render() END')}
      </div>
    );
  }
}

export default App;

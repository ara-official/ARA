import React, { Component, Fragment } from 'react';

import logoImage from '../img/ara_logo_3.png';

import '../css/Global.css';
import '../css/MapAndList.css';

import {ContentList} from '../components';
import {FilterDate, FilterPeople, FilterEtc} from '../components';
import {Link} from 'react-router-dom';


// animate on scroll
// import ScrollAnimation from 'react-animate-on-scroll';

class MapAndList extends Component {
  constructor(props) {
    super(props)
    this.id = 2
    this.state = {
      isToggleDate: false,
      isTogglePeople: false,
      isToggleEtc: false,
    }
    // this.handleManyButtonClick = this.handleManyButtonClick.bind(this);
  }

  handleManyButtonClick = (id, e) => {
    e.preventDefault();
    if(id === 1)
    {
      this.setState(prevState => ({isToggleDate: !prevState.isToggleDate}));
      this.setState({isTogglePeople: false});
      this.setState({isToggleEtc: false});
    }
    else if(id === 2)
    { 
      this.setState({isToggleDate: false});
      this.setState(prevState => ({isTogglePeople: !prevState.isTogglePeople}));
      this.setState({isToggleEtc: false});
    }
    else if(id === 3)
    {
      this.setState({isToggleDate: false});
      this.setState({isTogglePeople: false});
      this.setState(prevState => ({isToggleEtc: !prevState.isToggleEtc}));
    }
  }

  handleScroll = (e) => {
    e.preventDefault();
    console.log('handleScroll START');
    let element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log('handleScroll');
    }
    console.log('handleScroll END');
  }

  render() {
    console.log('ⓙⓢ MapAndList.js | render() | START');
    const firstMessage = '여행 날짜와 게스트 인원수를 입력하면 관련된 모임을 확인할 수 있습니다. 모임이 금방 마감될 수 있습니다.'

    return (
      <Fragment>
        <form className="MapAndList">
          <div className="top">
            <Link to="/"><img id="logo" alt='imsi_logo' src={logoImage}/></Link>
            <input 
              id="searchBar" 
              placeholder="검색"
              value={this.props.input}
              onChange={this.props.handleChange}
              onKeyPress={this.props.handleKeyPress}
            />


             {(this.state.isToggleDate || this.state.isTogglePeople || this.state.isToggleEtc) &&
            // toggle 활성화 시, button 색도 바꿀 수 있을 거다.
              <div className="bottom_front">
                {console.log('isToggleDate   : ' + this.state.isToggleDate)}
                {console.log('isTogglePeople : ' + this.state.isTogglePeople)}
                {console.log('isToggleEtc    : ' + this.state.isToggleEtc)}
                {this.state.isToggleDate && <FilterDate handleManyButtonClick={(e) => this.handleManyButtonClick(1, e)}/>}
                {this.state.isTogglePeople && <FilterPeople handleManyButtonClick={(e) => this.handleManyButtonClick(2, e)}/>}
                {this.state.isToggleEtc && <FilterEtc handleManyButtonClick={(e) => this.handleManyButtonClick(3, e)}/>}
              </div>
            }

                        <Link to="/MapAndList/CreateContent">
              <button id="searchButton" >방생성</button>
            </Link>
          </div>

          {/* <ScrollAnimation className="middle" animateIn='fadeIn' animateOut='fadeOut' initiallyVisible={true} duration={1} 
          // afterAnimatedIn={function afterAnimatedIn(v) {
          //   var t = "Animate In finished.\n";
          //   t += 'v.onScreen: ' + v.onScreen + '\n';
          //   t += 'v.inViewport: ' + v.inViewPort;
          //   alert(t);
          // }}
          > */}
          <div className="middle" onScroll={this.handleScroll}>
              <button id="filter" name="date" onClick={(e) => this.handleManyButtonClick(1, e)}>날짜</button>
              <button id="filter" name="number" onClick={(e) => this.handleManyButtonClick(2, e)}>인원</button>
              <button id="filter" name="etc" onClick={(e) => this.handleManyButtonClick(3, e)}>필터</button>
          </div>
          {/* </ScrollAnimation> */}

          <div className="bottom">
           

            <div className="bottom_back">
              <div id="alarmMsg">
                {firstMessage}
              </div>
              <div id="contentList">
                <ContentList 
                  information={this.props.information} 
                  region={this.props.region}
                />
              </div>

            </div>
          </div>

        </form>


        {console.log('ⓙⓢ MapAndList.js | render() | END')}
      </Fragment>
    );
  }
}

export default MapAndList;

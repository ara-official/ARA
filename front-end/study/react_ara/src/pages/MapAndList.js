import React, { Component, Fragment } from 'react';

import '../css/Global.css';
import '../css/MapAndList.css';

import {ContentList} from '../components';
import {FilterDate, FilterPeople, FilterEtc} from '../components';
import {Link} from 'react-router-dom';

// react-scrollbar
// import { ScrollArea } from 'react-scrollbar';

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

  render() {
    console.log('ⓙⓢ MapAndList.js | render() | START');
    const firstMessage = '여행 날짜와 게스트 인원수를 입력하면 관련된 모임을 확인할 수 있습니다. 모임이 금방 마감될 수 있습니다.'

    return (
      <Fragment>
        <form className="MapAndList">
          <div className="top">
            <Link to="/"><img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/></Link>
            <input 
              id="searchBar" 
              placeholder="목적지 입력"
              value={this.props.input}
              onChange={this.props.handleChange}
              onKeyPress={this.props.handleKeyPress}
            />
            <Link to="/MapAndList/CreateContent">
              <button id="searchButton" >방생성</button>
            </Link>
          </div>

          <div className="middle">
            <button id="filter" name="date" onClick={(e) => this.handleManyButtonClick(1, e)}>날짜</button>
            <button id="filter" name="number" onClick={(e) => this.handleManyButtonClick(2, e)}>인원</button>
            <button id="filter" name="etc" onClick={(e) => this.handleManyButtonClick(3, e)}>필터</button>
          </div>

          <div className="bottom">
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

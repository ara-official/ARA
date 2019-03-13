import React, { Component } from 'react';
import '../css/MapAndList.css'
import {Start, ContentList} from '../components';
import {FilterDate, FilterPeople, FilterEtc} from '../components';
// import {Link} from 'react-router-dom';

class MapAndList extends Component {

  constructor(props)
  {
    super(props)
    this.id = 2
    this.state = {
      isToggleOn: true,
      isToggleDate: false,
      isTogglePeople: false,
      isToggleEtc: false,
      information: 
      [
        {
          id: 0,
          numOfpeople: 0,
          nickName: 'choi',
          phone: '010-1111-1111',
          perpose: 'have a lunch'
        },
        {
          id: 1,
          numOfpeople: 4,
          nickName: 'son',
          phone: '010-2222-2222',
          perpose: 'look around'
        },
        {
          id: 2,
          numOfpeople: 4,
          nickName: 'park',
          phone: '010-3333-3333',
          perpose: 'look around'
        },
        {
          id: 3,
          numOfpeople: 4,
          nickName: 'kwon',
          phone: '010-4444-4444',
          perpose: 'look around'
        }
      ]
    }
    this.count = 0;

    this.handleClick = this.handleClick.bind(this);
  }

   handleClick = (id, e) => {
    e.preventDefault();
    //console.log('The link was clicked.');
    console.log('this.state.isToggleOn 1 : ' + this.state.isToggleOn);
    if(this.state.isToggleOn)
    {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

      console.log('this.state.isToggleOn 2 : ' + this.state.isToggleOn);

    
      console.log('name : ' + id);
      if(id === 1)
      {
        console.log('date');
        this.setState({
          isToggleDate: true
        });
      }
      else if(id === 2)
      {
        this.setState({
          isTogglePeople: true
        });
      }
      else if(id === 3)
      {
        this.setState({
          isToggleEtc: true
        });
      }
    }
    else
    {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

      this.setState({
        isToggleDate: false,
        isTogglePeople: false,
        isToggleEtc: false
      });
    }
    // toggle button 종류
    
    console.log('this.state.isToggleOn 3 : ' + this.state.isToggleOn);
  }
  
  render() {
    console.log('MapAndList.js render() START');
    const {information} = this.state;

    return (
      <div>
        <form className="MapAndList">
          {/* <h2>[MapAndList.js]</h2> */}
          <div className="top">
            <img id="logo" src="https://github.com/ara-official/ARA/blob/master/front-end/img/nike.png?raw=true"/>
            <input id="searchBar" placeholder="검색"/>
          </div>
          {/* <SearchBoxMini/> */}
          <div className="middle">
            {/* <Link to="./Start"><button id="filter">날짜</button></Link> */}
            <button id="filter" name="date" onClick={(e) => this.handleClick(1, e)}>날짜</button>
            <button id="filter" name="number" onClick={(e) => this.handleClick(2, e)}>인원</button>
            <button id="filter" name="etc" onClick={(e) => this.handleClick(3, e)}>필터</button>
          </div>

          <div className="bottom">
          {this.state.isToggleOn && <div>
              <div id="alarmMsg">
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.
              </div>
              <div id="contentList">
                <ContentList data={information}/> 
              </div>
            </div>
          }  
          {!this.state.isToggleOn &&
          // toggle 활성화 시, button 색도 바꿀 수 있을 거다.
            <div>
              {this.state.isToggleDate && <FilterDate/>}
              {this.state.isTogglePeople && <FilterPeople/>}
              {this.state.isToggleEtc && <FilterEtc/>}
            </div>
          }  
          </div>
        </form>


        {console.log('MapAndList.js render() END')}
      </div>
    );
  }
}

export default MapAndList;

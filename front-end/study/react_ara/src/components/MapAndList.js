import React, { Component } from 'react';
import '../css/MapAndList.css'
import {ContentList} from '../components';

class MapAndList extends Component {
  // DB 에서 관리해야함
  id = 2
  state = {
      information: [
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
    count = 0

  render() {

      
    const {information} = this.state;
    console.log('MapAndList.js render() START');


    return (
      <form className="MapAndList">
        {/* <h2>[MapAndList.js]</h2> */}
        <div className="top">
          <img id="logo" src="https://github.com/ara-official/ARA/blob/master/front-end/img/nike.png?raw=true"/>
          <input id="searchBar" placeholder="검색"/>
        </div>
        {/* <SearchBoxMini/> */}
        <div className="middle">
          <button id="filter">날짜</button>
          <button id="filter">인원</button>
          <button id="filter">필터</button>
        </div>
        <div className="bottom">
          <div id="alarmMsg">
            여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.
          </div>
          <div id="contentList">
            <ContentList data={information}/> 
          </div>

        </div>



        {console.log('MapAndList.js render() END')}
      </form>
    );
  }
}

export default MapAndList;

import React, { Component } from 'react';
import '../css/MapAndList.css'
import {ContentList} from '../components';
import {FilterDate, FilterPeople, FilterEtc} from '../components';
// import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';

class MapAndList extends Component {
  constructor(props) {
    super(props)
    this.id = 2
    this.state = {
      isToggleDate: false,
      isTogglePeople: false,
      isToggleEtc: false,
      information: [
        {
          id: 0,
          title: '경복궁 네 명 모아 봅니다.',
          numOfpeople: 0,
          nickName: '최*훈',
          phone: '010-3493-****',
          perpose: '관광, 기타',
          imgSrc: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true'
        },
        {
          id: 1,
          title: '첨성대 구경 후에 식사 하실 세 분 구해요',
          numOfpeople: 4,
          nickName: '손*식',
          phone: '010-9394-****',
          perpose: '관광, 식사',
          imgSrc: 'https://image.ytn.co.kr/general/jpg/2016/0914/201609141101410773_t.jpg'
        },
        {
          id: 2,
          title: '부산타워 구경!! 한 두 명 구해요',
          numOfpeople: 4,
          nickName: '권*한',
          phone: '010-7557-****',
          perpose: '관광',
          imgSrc: 'https://news.busan.go.kr/comm/getImage?srvcId=MEDIA&upperNo=1666&fileTy=MEDIA&fileNo=1'
        },
        {
          id: 3,
          title: '수원화성 구경',
          numOfpeople: 4,
          nickName: '민*식',
          phone: '010-1332-****',
          perpose: '관광, 커타',
          imgSrc: 'http://heritage.unesco.or.kr/wp-content/uploads/wh_img/hd6_394_i1.jpg'
        },
        {
          id: 4,
          title: '가을',
          numOfpeople: 0,
          nickName: '손*식',
          phone: '010-3434-****',
          perpose: '기타',
          imgSrc: 'https://github.com/ara-official/ARA/blob/master/front-end/img/gauri.jpeg?raw=true'
        }
      ]
    }
    this.count = 0;
    this.handleManyButtonClick = this.handleManyButtonClick.bind(this);
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
    console.log('MapAndList.js render() START');
    const {information} = this.state;

    return (
      <div>
        <form className="MapAndList">
          {/* <h2>[MapAndList.js]</h2> */}
          <div className="top">
            <Link to="./"><img id="logo" src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_2.png?raw=true"/></Link>
            <input id="searchBar" placeholder="검색"/>
          </div>

          {/* <SearchBoxMini/> */}
          <div className="middle">
            {/* <Link to="./Start"><button id="filter">날짜</button></Link> */}
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
                {this.state.isToggleDate && <FilterDate/>}
                {this.state.isTogglePeople && <FilterPeople/>}
                {this.state.isToggleEtc && <FilterEtc/>}
              </div>
            }

            <div className="bottom_back">
              <div id="alarmMsg">
                여행 날짜와 게스트 인원수를 입력하면 1박당 총 요금을 확인할 수 있습니다. 관광세가 추가로 부과될 수 있습니다.
              </div>
              <div id="contentList">
                <ContentList data={information}/>
              </div>
            </div>
          </div>
        </form>


        {console.log('MapAndList.js render() END')}
      </div>
    );
  }
}

export default MapAndList;

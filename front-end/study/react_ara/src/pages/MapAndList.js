import React, { Component, Fragment } from 'react';

import '../css/Global.css';
import '../css/MapAndList.css';

import {ContentList} from '../components';
import {FilterDate, FilterPeople, FilterEtc} from '../components';
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
          title: '강남 쉐이크쉑 같이 드실 1~2 분 구해요~',
          destination: '강남',
          numOfpeople: 0,
          nickName: '알*고',
          phone: '010-3223-****',
          perpose: '점심식사',
          imgSrc: 'http://img.seoul.co.kr/img/upload/2016/07/19/SSI_20160719141317_V.jpg'
        },
        {
          id: 1,
          title: '경복궁 네 명 모아 봅니다.',
          destination: '경복궁',
          numOfpeople: 0,
          nickName: '최*훈',
          phone: '010-3493-****',
          perpose: '관광, 기타',
          imgSrc: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true'
        },
        {
          id: 2,
          title: '첨성대 구경 후에 식사 하실 세 분 구해요',
          destination: '경주',
          numOfpeople: 4,
          nickName: '손*식',
          phone: '010-9394-****',
          perpose: '관광, 식사',
          imgSrc: 'https://image.ytn.co.kr/general/jpg/2016/0914/201609141101410773_t.jpg'
        },
        {
          id: 3,
          title: '부산타워 구경!! 한 두 명 구해요',
          destination: '부산',
          numOfpeople: 4,
          nickName: '권*한',
          phone: '010-7557-****',
          perpose: '관광',
          imgSrc: 'https://news.busan.go.kr/comm/getImage?srvcId=MEDIA&upperNo=1666&fileTy=MEDIA&fileNo=1'
        },
        {
          id: 4,
          title: '수원화성 구경',
          destination: '수원',
          numOfpeople: 4,
          nickName: '민*식',
          phone: '010-1332-****',
          perpose: '관광, 커타',
          imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Bifyu_8.jpg'
        },
        {
          id: 5,
          title: '가을',
          destination: '가을',
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
            <Link to="./MapAndList/CreateContent">
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
                {this.state.isToggleDate && <FilterDate/>}
                {this.state.isTogglePeople && <FilterPeople/>}
                {this.state.isToggleEtc && <FilterEtc/>}
              </div>
            }

            <div className="bottom_back">
              <div id="alarmMsg">
                {firstMessage}
              </div>
              <div id="contentList">
                <ContentList data={information} destination={this.props.destination}/>
              </div>

            </div>
          </div>

        </form>


        {console.log('MapAndList.js render() END')}
      </Fragment>
    );
  }
}

export default MapAndList;

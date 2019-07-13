import React from 'react';

import logoImage from '../img/ara_logo_3.png';

import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/CreateContent.css';
import axios from 'axios';

import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB);



class CreateContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date(),
          title: '',
          meeting_date: '',
          min_num_of_member: 0,
          max_num_of_member: 0,
          content: ''
        };
        this.handleDateChange = this.handleDateChange.bind(this);
      }
     
    postNumber = (input__title, input__meeting_date, input__num_of_member) => {
        console.log('debug!!!! : ' + input__title+input__meeting_date+input__num_of_member);
        axios.post('http://localhost:3005/api/v1/contents/', {
            title: input__title,
            meeting_date: '20',
            region: '경복궁',
            num_of_people: input__num_of_member,
            nick_name: '최*훈',
            phone_number: '0103493****',
            perpose: '관광, 기타',
            image_path: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true'
        // axios.post('https://reqres.in/api/users', {
        //     title: "POST",
        //     data: {
        //         name: "paul rudd",
        //         movies: ["I Love You Man", "Role Models"]
        //     }
        })
        .then( response => { console.log(response) } )
        .catch( response => { console.log(response) } );
    };

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
        console.log('Date is' + date);
    }

    handleChange = (e) => {
        // e.preventDefault();
        console.log('name : value = ' + e.target.name + ' : ' +e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(this.state);
    }

    handleOnClick = (e) => {
        // e.preventDefault();
        console.log("title : "+ this.state.title + " meeting_date : "+ this.state.meeting_date +"num_mem : "+ this.state.min_num_of_member);
        
        this.postNumber(this.state.title, this.state.meeting_date, this.state.min_num_of_member);
        // const info = {
        //     title: this.state.title,
        //     meeting_date: this.state.meeting_date,
        //     region: '꾸꾸집',
        //     num_of_people: 4,
        //     nick_name: '꾸꾸',
        //     phone_number: '0103493****',
        //     perpose: this.state.content,
        //     image_path: 'https://avatars1.githubusercontent.com/u/47748609?s=200&v=4',
        //     closed: false
        // };
        //console.log('info : ' + info);
        //this.props.insert(info);
    }

    render(){
        const pageName = "CreateContent Page";
        const { handleChange } = this;
        console.log('CreateContent.js START');
        return (
            <div className="CreateContent">
                <div className="top">
                    <Link to="/MapAndList">
                        <img id="logo" alt='imsi_logo' src={logoImage}/>
                    </Link>
                    <div id="pageName">
                        {pageName}
                    </div>
                </div>
                {/* <div className="middle">
                </div> */}
                <div className="bottom">
                <div>
                    <text id="title_txt">제목</text>
                    <input 
                        id="title" 
                        name="title"
                        placeholder="제목 입력"
                        value={this.state.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <text id="meeting_date_txt">약속 날짜</text>
                    <DatePicker
                        id="meeting_date"
                        placeholder="날짜 입력"
                        selected={this.state.startDate}
                        onSelect={this.handleSelect} 
                        onChange={this.handleDateChange}
                        popperPlacement="bottom-end"
                        popperModifiers={{
                            offset: {
                              enabled: true,
                              offset: '5px, 10px'
                            },
                            preventOverflow: {
                              enabled: true,
                              escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
                              boundariesElement: 'viewport'
                            }
                          }}
                          
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
        
                        />
                        </div>
                        <div>
                        <text id="min_num_of_member_txt">최소 인원</text>
                    <input 
                        id="min_num_of_member"
                        name='min_num_of_member'
                        type='number'
                        placeholder="최소 참여명수 입력"
                        value={this.state.min_num_of_member}
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <text id="max_num_of_member_txt">최대 인원</text>
                    <input 
                        id="max_num_of_member"
                        name='max_num_of_member'
                        type='number'
                        placeholder="최대 참여명수 입력"
                        value={this.state.max_num_of_member}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <text id="content_txt">내용</text>
                    <textarea 
                        id="content" 
                        name='content'
                        type='text'
                        placeholder="글 내용"
                        value={this.state.content}
                        onChange={handleChange}
                    />
                    </div>
                    <Link to="/MapAndList">
                    

                        <button id="searchButton" onClick={this.handleOnClick}>등록</button>
                    </Link>
                </div>
                {console.log('CreateContent.js render() END')}
            </div>
        );
    }
}

export default CreateContent;
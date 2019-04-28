import React from 'react';

import logoImage from '../img/ara_logo_3.png';

import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/CreateContent.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB);

class CreateContent extends React.Component{
    state = {
        startDate: new Date(),
        title: '',
        meeting_date: '',
        min_num_of_member: 0,
        max_num_of_member: 0,
        content: ''
    }
     
    handleDateChange(date) {
        this.setState({
            startDate: date
        });
        console.log('Date is' + date);
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log('name : value = ' + e.target.name + ' : ' +e.target.value);
        this.setState({
            [e.target.name] : e.target.value
        });
        console.log(this.state);
    }

    handleInsert = (e) => {
        // e.preventDefault();
        const info = {
            title: this.state.title,
            meeting_date: this.state.meeting_date,
            region: '꾸꾸집',
            num_of_people: 4,
            nick_name: '꾸꾸',
            phone_number: '0103493****',
            perpose: this.state.content,
            image_path: 'https://avatars1.githubusercontent.com/u/47748609?s=200&v=4',
            closed: false
        };
        console.log('info : ' + info);
        this.props.insert(info);
    }

    render(){
        const pageName = "CreateContent Page";
        const { handleChange } = this;
        console.log('CreateContent.js START');
        return (
            <div className="CreateContent">
                <div className="top">
                    <Link to="/">
                        <img id="logo" alt='imsi_logo' src={logoImage}/>
                    </Link>
                    <div id="pageName">
                        {pageName}
                    </div>
                </div>
                {/* <div className="middle">
                </div> */}
                <div className="bottom">
                    <input 
                        id="title" 
                        name='title'
                        placeholder="제목 입력"
                        value={this.state.title}
                        onChange={handleChange}
                    />

                    <DatePicker
                        id="meeting_date"
                        placeholder="날짜 입력"
                        selected={this.state.startDate}
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
                    
                    <input 
                        id="min_num_of_member"
                        name='min_num_of_member'
                        type='number'
                        placeholder="최소 참여명수 입력"
                        value={this.state.min_num_of_member}
                        onChange={handleChange}
                    />
                    <input 
                        id="max_num_of_member"
                        name='max_num_of_member'
                        type='number'
                        placeholder="최대 참여명수 입력"
                        value={this.state.max_num_of_member}
                        onChange={handleChange}
                    />
                
                    <textarea 
                        id="content" 
                        name='content'
                        type='text'
                        placeholder="글 내용"
                        value={this.state.content}
                        onChange={handleChange}
                    />
                    
                    <Link to="/MapAndList">
                        <button id="searchButton" onClick={this.handleInsert}>등록</button>
                    </Link>
                </div>
                {console.log('CreateContent.js render() END')}
            </div>
        );
    }
}

export default CreateContent;
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/Global.css';
import '../css/CreateContent.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB);

class CreateContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
        console.log('Date is' + date);
        
      }
    render(){
        const pageName = "CreateContent Page";
        console.log('CreateContent.js START');
        return (
            <div className="CreateContent">
                <div className="top">
                    <Link to="/">
                        <img id="logo" alt='imsi_logo' src="https://github.com/ara-official/ARA/blob/master/front-end/img/ara_logo_3.png?raw=true"/>
                    </Link>
                    <div id="defaultStyle">
                        {pageName}
                    </div>
                </div>
                <div className="middle">
                </div>
                <div className="bottom">
                    <input 
                        id="title" 
                        placeholder="제목 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        oanKeyPress={this.props.handleKeyPress}
                    />

                    <DatePicker
                        id="meeting_date"
                        placeholder="날짜 입력"
                        selected={this.state.startDate}
                        onChange={this.handleChange}
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
                        id="num_of_member" 
                        placeholder="참여명수 입력"
                        value={this.props.input}
                        onChange={this.props.handleChange}
                        onKeyPress={this.props.handleKeyPress}
                    />
                    <Link to="/MapAndList">
                        <button id="searchButton">등록</button>
                    </Link>
                </div>
                {console.log('CreateContent.js render() END')}
            </div>
        );
    }
}

export default CreateContent;
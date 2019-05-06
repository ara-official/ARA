import React from 'react';
import '../../css/Global.css';
import '../../css/FilterDate.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB);

class FilterDate extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(date) {
        this.setState({
            startDate: date
        });
        console.log('Date is' + date);

        const tmp = {
            id: 0,
            value: date
        }
        this.props.setFilter(tmp);
    }

    // handleSetFilter = (e) => {
    //     console.log('handleSetFilter : ' + e.target.value);
    //     const tmp = {
    //         id: 0,
    //         value: e.target.value
    //     }
    //     this.props.setFilter(tmp);
    // }

    render(){
        console.log('ⓙⓢ FilterDate | render() | START');
        return(
            <div className="FilterDate">
                    <div className="top">
                        <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                        <div id="title">필터</div>
                    </div>
                    <div className="middle">
                        <div id="date">날짜</div>
                        <DatePicker
                            id="date_input"
                            placeholder="년/월/일"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            popperPlacement="bottom-end"
                        />
                        </div>
                    <div className="bottom">
                        <button id="button" onClick={this.props.handleManyButtonClick}>
                            결과 보기
                        </button> 
                    </div>
                {console.log('ⓙⓢ FilterDate | render() | END')}
            </div>
        );
    }
}

export default FilterDate;
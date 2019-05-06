import React from 'react';
import '../../css/Global.css';
import '../../css/FilterPeople.css';

class FilterPeople extends React.Component{
    handleSetFilter = (e) => {
        console.log('handleSetFilter : ' + e.target.value);
        const tmp = {
            id: 1,
            value: e.target.value
        }
        this.props.setFilter(tmp);
    }
    render(){
        console.log('ⓙⓢ FilterPeople | render() | START');
        return(
            <div className="FilterPeople">
                    <div className="top">
                        <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                        <div id="title">필터</div>
                    </div>
                    <div className="middle">
                        <div id="num_of_people">인원</div>
                        <input 
                            id="num_of_people_input" 
                            type="number" 
                            placeholder="0" 
                            onChange={this.handleSetFilter}>
                        </input>
                    </div>
                    <div className="bottom">
                        <button id="button" onClick={this.props.handleManyButtonClick}>
                            결과 보기
                        </button>
                    </div>
                    {/* <h2>FilterPeople.js</h2> */}
                {console.log('ⓙⓢ FilterPeople | render() | END')}
            </div>
        );
    }
}

export default FilterPeople;
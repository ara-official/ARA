import React from 'react';
import '../../css/Global.css';
import '../../css/FilterPeople.css';

class FilterPeople extends React.Component{
    handleSetFilter = (e) => {
        e.preventDefault();
        console.log('handleSetFilter : ' + e.target.value);
        const tmp = {
            id: 1,
            value: e.target.value
        }
        this.props.setFilter(tmp);
    }

    handleOnKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault(); // 기본 링크 동작 막음 -> 안할 경우, 다음에 위치한 Button이 눌려짐
            this.props.handleManyButtonClick(2, e);
        }
    }
    
    render(){
        console.log('ⓙⓢ FilterPeople | render() | START');
        return(
            <div className="FilterPeople">
                    <div className="top">
                        <button id="closeButton" onClick={(e) => this.props.handleManyButtonClick(2, e)}>X</button>
                        <div id="title">필터</div>
                    </div>
                    <div className="middle">
                        <div id="num_of_people">인원</div>
                        <input 
                            id="num_of_people_input" 
                            type="number" 
                            placeholder="0" 
                            onChange={this.handleSetFilter}
                            onKeyPress={this.handleOnKeyPress}
                            >
                        </input>
                    </div>
                    <div className="bottom">
                        <button id="button" onClick={(e) => this.props.handleManyButtonClick(2, e)}>
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
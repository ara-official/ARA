import React from 'react'
import '../../css/Global.css';
import '../../css/FilterEtc.css'

class FilterEtc extends React.Component{
    handleSetFilter = (e) => {
        console.log('handleSetFilter : ' + e.target.value);
        const tmp = {
            id: 2,
            value: e.target.value
        }
        this.props.setFilter(tmp);
    }
    render(){
        console.log('ⓙⓢ FilterEtc | render() | START');
        return(
            <div className="FilterEtc">
                    <div className="top">
                        <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                        <div id="title">필터</div>
                    </div>
                    <div className="middle">
                    
                    </div>
                    <div className="bottom">
                        <button id="button" onClick={this.props.handleManyButtonClick}>
                            결과 보기
                        </button>
                    </div>
                {console.log('ⓙⓢ FilterEtc | render() | END')}
            </div>
        );
    }
}

export default FilterEtc;
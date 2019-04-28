import React from 'react'
import '../../css/FilterDate.css'

class FilterDate extends React.Component{
    render(){
        console.log('ⓙⓢ FilterDate | render() | START');
        return(
            <div className="FilterDate">
                <div className="InnerBox">
                    <h2>FilterDate.js</h2>
                    <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                </div>
                {console.log('ⓙⓢ FilterDate | render() | END')}
            </div>
        );
    }
}

export default FilterDate;
import React from 'react'
import '../../css/FilterEtc.css'

class FilterEtc extends React.Component{
    render(){
        console.log('ⓙⓢ FilterEtc | render() | START');
        return(
            <div className="FilterEtc">
                <div className="InnerBox">
                    <h2>FilterEtc.js</h2>
                    <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                </div>
                {console.log('ⓙⓢ FilterEtc | render() | END')}
            </div>
        );
    }
}

export default FilterEtc;
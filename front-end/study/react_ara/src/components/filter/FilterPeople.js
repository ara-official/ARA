import React from 'react'
import '../../css/FilterPeople.css'

class FilterPeople extends React.Component{
    render(){
        console.log('ⓙⓢ FilterPeople | render() | START');
        return(
            <div className="FilterPeople">
                <div className="InnerBox">
                    <h2>FilterPeople.js</h2>
                    <button id="closeButton" onClick={this.props.handleManyButtonClick}>X</button>
                </div>
                {console.log('ⓙⓢ FilterPeople | render() | END')}
            </div>
        );
    }
}

export default FilterPeople;
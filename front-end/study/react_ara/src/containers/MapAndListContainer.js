import React from 'react'
import { connect } from 'react-redux';
import MapAndList from '../components/MapAndList';

import * as counterActions from '../store/modules/counter';


class MapAndListContainer extends React.Component{
    render(){
        return(
            <div>
                {console.log("CounterContainer.js : " + this.props.count)}
                <MapAndList receiveCount={this.props.count} onIncrement={this.props.increment}/>
            </div>
       );
    }
}

// export default MapAndListContainer;

export default connect(
    (state) => ({
        count: state.counter.count
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment())
    })
)(MapAndListContainer);
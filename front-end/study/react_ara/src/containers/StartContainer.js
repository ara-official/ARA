import React from 'react'
import { connect } from 'react-redux';
import Start from '../components/Start';

import * as counterActions from '../store/modules/counter';


class StartContainer extends React.Component{
    render(){
        return(
            <div>
                {console.log("CounterContainer.js : " + this.props.count)}
                <Start receiveCount={this.props.count} onIncrement={this.props.increment}/>
            </div>
       );
    }
}

// export default StartContainer;

export default connect(
    (state) => ({
        count: state.counter.count
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment())
    })
)(StartContainer);
import React from 'react'
import { connect } from 'react-redux';
import MapAndList from '../components/MapAndList';

class MapAndListContainer extends React.Component{
    render(){
        return(
            <div>
                <MapAndList 
                input={this.props.input}
                />
            </div>
       );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search}) => ({
    input: search.get('input')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapAndListContainer);
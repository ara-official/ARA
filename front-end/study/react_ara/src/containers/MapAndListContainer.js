import React from 'react'
import { connect } from 'react-redux';
import { MapAndList } from '../pages';

import * as searchActions from '../store/modules/search';
// import * as contentActions from '../store/modules/content';

class MapAndListContainer extends React.Component{
    handleChange = (e) => {
        // e.preventDefault();
        const { changeInput } = this.props;
        changeInput(e.target.value);
    }

    handleInsert = (e) => {
        e.preventDefault();
        this.props.insert(this.props.input)
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault(); // 기본 링크 동작 막음
            this.props.insert(this.props.input);
            this.setState({
                redirect: true
            })
        }
    }

    render(){
        const {input, destination, information} = this.props;
        const {handleChange, handleInsert, handleKeyPress} = this;
        return(
            <div>
                {console.log('input : ' + this.props.input)}
                {console.log('destination : ' + this.props.destination)}
                <MapAndList 
                    input={input} 
                    handleChange={handleChange} 
                    destination={destination} 
                    handleInsert={handleInsert}
                    handleKeyPress={handleKeyPress}

                    information={information}
                />
            </div>
       );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search, content}) => ({
    input: search.get('input'),
    destination: search.get('destination'),
    information: content.get('information')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    changeInput: (value) => dispatch(searchActions.changeInput(value)),
    insert: (text) => dispatch(searchActions.insert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapAndListContainer);
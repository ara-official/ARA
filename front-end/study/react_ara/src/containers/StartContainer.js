import React from 'react'
import { connect } from 'react-redux';
import Start from '../components/Start';

// import * as counterActions from '../store/modules/counter';
import * as searchActions from '../store/modules/search';


class StartContainer extends React.Component{
    
    handleChange = (e) => {
        const { changeInput } = this.props;
        changeInput(e.target.value);
    }

    handleInsert = (e) => {
        this.props.insert(this.props.input)
    }

    render(){
        const {input, destination} = this.props;
        const {handleChange, handleInsert} = this;
        return(
            <div>
                <Start 
                input={input} handleChange={handleChange} 
                destination={destination} handleInsert={handleInsert}
                />
            </div>
       );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search}) => ({
    input: search.get('input'),
    destination: search.get('destination')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    changeInput: (value) => dispatch(searchActions.changeInput(value)),
    insert: (text) => dispatch(searchActions.insert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContainer);


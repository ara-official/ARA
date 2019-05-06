import React from 'react';
import { connect } from 'react-redux';

import { CreateContent } from '../pages';


import * as contentActions from '../store/modules/content';

class CreateContentContainer extends React.Component{
    
    handleInsert = (input) => {
        console.log('MapAndListContainer - handleInsert START');
        // e.preventDefault();
        // module search
        this.props.insertContent(input);
        // module search
        console.log('region : ' + this.props.region);
        // REST
        // this.getListFromServer(this.props.region);
        // response success 일 경우, 아래 command 동작하도록!
    }

    render(){
        return(
            <div>
                <CreateContent 
                    insert={this.handleInsert}
                />
            </div>
        );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search, content}) => ({
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    insertContent: (inputInfo) => dispatch(contentActions.insert(inputInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContentContainer);
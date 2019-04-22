import React from 'react';
import { connect } from 'react-redux';

import { CreateContent } from '../pages';


import * as contentActions from '../store/modules/content';

class CreateContentContainer extends React.Component{


    render(){
        return(
            <div>
                <CreateContent 
                    insert={this.props.insert}
                />
            </div>
        );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({content}) => ({
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    insert: (title) => dispatch(contentActions.insert(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContentContainer);
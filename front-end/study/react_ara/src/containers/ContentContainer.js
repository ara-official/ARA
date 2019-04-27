import React from 'react';
import { connect } from 'react-redux';

import { Content } from '../components';


import * as contentActions from '../store/modules/content';

class ContentContainer extends React.Component{
    render(){
        return(
            <div>
                <Content 
                    key = {this.props.key}
                    info = {this.props.info}
                    
                    setContentData={this.props.setContentData}
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
    setContentData: (inputInfo) => dispatch(contentActions.setContentData(inputInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
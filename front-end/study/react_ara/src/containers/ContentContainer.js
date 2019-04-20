import React from 'react';
import { connect } from 'react-redux';

import { Content } from '../components';


import * as searchActions from '../store/modules/content';

class ContentContainer extends React.Component{
    render(){
        const {setContentData} = this.props;
        return(
            <div>
                <Content 
                    info = {this.props.info} // 앞으로 store에서 관리하도록 바꿀 것임. 우선은 component에서..
                    
                    setContentData={setContentData}
                />
            </div>
        );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({content}) => ({
    storeInfo: content.get('info'),
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    setContentData: (info) => dispatch(searchActions.setContentData(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
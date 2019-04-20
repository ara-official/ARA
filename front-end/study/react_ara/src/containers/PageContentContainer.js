import React from 'react';
import { connect } from 'react-redux';
import { PageContent } from '../pages';


import * as searchActions from '../store/modules/content';

class PageContentContainer extends React.Component{
    render(){
        const {storeInfo, destination, setContentData} = this.props;
        return(
            <div>
                <PageContent 
                    // state
                    storeInfo={storeInfo}

                    // function
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

export default connect(mapStateToProps, mapDispatchToProps)(PageContentContainer);
import React from 'react';
import { connect } from 'react-redux';
import { PageContent } from '../pages';


import * as contentActions from '../store/modules/content';

class PageContentContainer extends React.Component{
    render(){
        const {storeInfo, update} = this.props;
        return(
            <div>
                <PageContent 
                    // state
                    storeInfo={storeInfo}

                    // function
                    update={update}
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
    // setContentData: (info) => dispatch(contentActions.setContentData(info)),
    update: (id) => dispatch(contentActions.update(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContentContainer);
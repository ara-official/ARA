import React from 'react';
import { connect } from 'react-redux';
import { PageContent } from '../pages';

// axios
import axios from 'axios';

import * as searchActions from '../store/modules/search';
import * as contentActions from '../store/modules/content';

class PageContentContainer extends React.Component{
    // componentDidMount() {
    //     console.log('MapAndListContainer - componentDidMount START');
    //     axios.get('http://localhost:3005/api/v1/contents/')
    //     .then( response => {
    //         console.log(response); 
    //         // 내일 작성해야 하는 부분!!!!
    //     }) // success
    //     .catch( response => {
    //             console.log(response); 
    //     }); // error : 실패일 경우 그냥 dummy 채워보자
    //     console.log('MapAndListContainer - componentDidMount END');
    // }
    
    deleteItemFromServer = (region) => {
        return axios.delete('http://localhost:3005/api/v1/contents/' + region)
        .then( response => {
                console.log(response); 
                // module content
                // redux store 도 update 해줘야함
                console.log('PageContentContainer - deleteItemFromServer END (success)');
            }) // success
        .catch( response => {
                console.log(response); 

                // module content

                console.log('PageContentContainer - deleteItemFromServer END (error)');
            }); // error : 실패일 경우 그냥 dummy 채워보자
    };

    handleUpdate = (id) => {
        console.log('id : ' + id);
        // this.props.remove(id);
        this.deleteItemFromServer(id);
    }


    render(){
        const {storeInfo} = this.props;
        return(
            <div>
                <PageContent 
                    // state
                    storeInfo={storeInfo}

                    // function
                    update={this.handleUpdate}


                    count={this.props.count}
                    setCount={this.props.setCount}
                />
            </div>
        );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({content}) => ({
    storeInfo: content.get('info'),
    information: content.get('information'),
    count: content.get('count'),

    filter_b: content.get('filter_b')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    insertSearch: (value) => dispatch(searchActions.insert(value)),

    // setContentData: (info) => dispatch(contentActions.setContentData(info)),
    update: (id) => dispatch(contentActions.update(id)),
    remove: (id) => dispatch(contentActions.remove(id)),
    setCount: (value) => dispatch(contentActions.setCount(value)),

    insertContent: (info) => dispatch(contentActions.insert(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContentContainer);
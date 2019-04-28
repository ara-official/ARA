import React from 'react'
import { connect } from 'react-redux';
import { MapAndList } from '../pages';

import * as searchActions from '../store/modules/search';
import * as contentActions from '../store/modules/content';

// axios
import axios from 'axios';

class MapAndListContainer extends React.Component{
    componentDidMount() {
        console.log('MapAndListContainer - componentDidMount START');
        axios.get('http://172.20.10.5:8000/api/v1/contents/')
        .then( response => {
            console.log(response); 
            // 내일 작성해야 하는 부분!!!!
        }) // success
        .catch( response => {
                console.log(response); 
        }); // error : 실패일 경우 그냥 dummy 채워보자
        console.log('MapAndListContainer - componentDidMount END');
    }

    handleChange = (e) => {
        // e.preventDefault();
        const { changeInput } = this.props;
        changeInput(e.target.value);
    }

    getListFromServer = (region) => {
        return axios.get('http://172.20.10.5:8000/api/v1/contents/' + region)
        .then( response => {
                console.log(response); 
                // 내일 작성해야 하는 부분!!!!
            }) // success
        .catch( response => {
                console.log(response); 

                // module content
                // this.props.clear();
                // dummy data
                const info = {
                    title: 'dummy data',
                    meeting_date: '2019-05-25',
                    region: '안드로메다',
                    num_of_people: 4,
                    nick_name: '가을이',
                    phone_number: '0103493****',
                    perpose: '관광, 기타',
                    image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                    closed: false
                };
                // console.log('dummy info : ' + info);
                // module content
                this.props.insertContent(info);
                console.log('MapAndListContainer - handleInsert END');
            }); // error : 실패일 경우 그냥 dummy 채워보자
    };

    handleInsert = (input) => {
        console.log('MapAndListContainer - handleInsert START');
        // e.preventDefault();
        // module search
        this.props.insertSearch(input);
        // module search
        console.log('region : ' + this.props.region);
        // REST
        this.getListFromServer(this.props.region);
        // response success 일 경우, 아래 command 동작하도록!
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            e.preventDefault(); // 기본 링크 동작 막음 -> 안할 경우, 다음에 위치한 Button이 눌려짐
            this.handleInsert(this.props.input);
            // this.setState({
            //     redirect: true
            // })
        }
    }

    render(){
        const {input, region, information} = this.props;
        const {handleChange, handleKeyPress} = this;
        return(
            <div>
                {console.log('input : ' + this.props.input)}
                {console.log('region : ' + this.props.region)}
                <MapAndList 
                    input={input} 
                    region={region} 
                    information={information}

                    handleChange={handleChange} 

                    handleKeyPress={handleKeyPress}

                />
            </div>
       );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search, content}) => ({
    input: search.get('input'),
    region: search.get('region'),

    information: content.get('information')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    changeInput: (value) => dispatch(searchActions.changeInput(value)),

    insertSearch: (text) => dispatch(searchActions.insert(text)),

    clear: () => dispatch(contentActions.clear()),
    insertContent: (info) => dispatch(contentActions.insert(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapAndListContainer);
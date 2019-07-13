import React from 'react'
import { connect } from 'react-redux';
import { MapAndList } from '../pages';

import * as searchActions from '../store/modules/search';
import * as contentActions from '../store/modules/content';

// axios
import axios from 'axios';

class MapAndListContainer extends React.Component{
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
    // componentWillReceiveProps() {
    //     console.log('MapAndListContainer - componentWillReceiveProps START');
    //     axios.get('http://localhost:3005/api/v1/contents/')
    //     .then( response => {
    //         console.log(response); 
    //         // 내일 작성해야 하는 부분!!!!
    //     }) // success
    //     .catch( response => {
    //             console.log(response); 
    //     }); // error : 실패일 경우 그냥 dummy 채워보자
    //     console.log('MapAndListContainer - componentWillReceiveProps END');
    // }

    state = {
        bTest: false
    }

    componentDidMount() {
        console.log('componentDidMount() : ' + this.state.bTest);
        if(this.state.bTest === false)
        {
            this.handleInsert('');
            this.setState({
                bTest: true
            })
        }
    }

    shouldComponentUpdate = () => {
        console.log('shouldComponentUpdate() : ' + this.state.bTest);
        // this.handleInsert('');
        return true;
    }

    componentDidUpdate() {
        console.log('componentDidUpdate() : ' + this.state.bTest);

    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps() : ' + this.state.bTest);
    } 

    componentWillUpdate() {

    }

    handleChange = (e) => {
        // e.preventDefault();
        const { changeInput } = this.props;
        changeInput(e.target.value);
    }

    getListFromServer = (region) => {
        console.log('MapAndListContainer.js');
        console.log('getListFromServer - region : ' + region + ', filter_b : ' + this.props.filter_b);
        if(this.props.filter_b === '' || this.props.filter_b === '0')
        {
            const str = 'http://localhost:3005/api/v1/contents/' + region;
            return axios.get(str)
            .then( response => {
                console.log(response); 
                // module content
                this.props.clear();
                
                console.log('response.data.length : ' + response.data.length);
                // module content
                this.props.setCount(response.data.length);
                if(response.data.length){
                    for (const {id, title, meeting_date, num_of_member} of response.data)
                    {
                        let info = {
                            id: id,
                            title: title,
                            meeting_date: meeting_date,
                            region: '안드로메다',
                            num_of_people: num_of_member,
                            nick_name: 'N/A',
                            phone_number: 'N/A',
                            perpose: 'N/A',
                            image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                            closed: false
                        };
                        // console.log('info : ' + info);
                        // console.log('title /  : ' + title + ' / ' + meeting_date + ' / ' + num_of_member);
                        this.props.insertContent(info);
                    }
                }
                else if(response.data.length === 0)
                {
                    // empty case
                }
                else // keyword 넣어서 검색할 경우, response.data.length 가 undefined로 들어온다.
                {
                    const {id, title, meeting_date, num_of_member} = response.data;
                    {
                        let info = {
                            id: id,
                            title: title,
                            meeting_date: meeting_date,
                            region: '안드로메다',
                            num_of_people: num_of_member,
                            nick_name: 'N/A',
                            phone_number: 'N/A',
                            perpose: 'N/A',
                            image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                            closed: false
                        };
                        console.log('info : ' + info);
                        console.log('title /  : ' + title + ' / ' + meeting_date + ' / ' + num_of_member);
                        this.props.insertContent(info);
                    }
                }
                console.log('MapAndListContainer - handleInsert END (success)');
            }) // success
            .catch( response => {
                console.log(response); 

                // // module content
                // this.props.clear();
                // // dummy data
                // const info = {
                //     title: 'dummy data',
                //     meeting_date: '2019-05-25',
                //     region: '안드로메다',
                //     num_of_people: 4,
                //     nick_name: '가을이',
                //     phone_number: '0103493****',
                //     perpose: '관광, 기타',
                //     image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                //     closed: false
                // };
                // // console.log('dummy info : ' + info);
                // // module content
                // this.props.insertContent(info);
                console.log('MapAndListContainer - handleInsert END (error)');
            }); // error : 실패일 경우 그냥 dummy 채워보자
        }
        else
        {
            const str = 'http://localhost:3005/api/v1/contents/' + region + '&' + this.props.filter_b;
            return axios.get(str)
            .then( response => {
                console.log(response); 
                // module content
                this.props.clear();
                
                console.log('response.data.length : ' + response.data.length);
                // module content
                this.props.setCount(response.data.length);
                if(response.data.length){
                    for (const {id, title, meeting_date, num_of_member} of response.data)
                    {
                        let info = {
                            id: id,
                            title: title,
                            meeting_date: meeting_date,
                            region: '안드로메다',
                            num_of_people: num_of_member,
                            nick_name: 'N/A',
                            phone_number: 'N/A',
                            perpose: 'N/A',
                            image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                            closed: false
                        };
                        // console.log('info : ' + info);
                        // console.log('title /  : ' + title + ' / ' + meeting_date + ' / ' + num_of_member);
                        this.props.insertContent(info);
                    }
                }
                else if(response.data.length === 0)
                {
                    // empty case
                }
                else // keyword 넣어서 검색할 경우, response.data.length 가 undefined로 들어온다.
                {
                    const {id, title, meeting_date, num_of_member} = response.data;
                    {
                        let info = {
                            id: id,
                            title: title,
                            meeting_date: meeting_date,
                            region: '안드로메다',
                            num_of_people: num_of_member,
                            nick_name: 'N/A',
                            phone_number: 'N/A',
                            perpose: 'N/A',
                            image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                            closed: false
                        };
                        console.log('info : ' + info);
                        console.log('title /  : ' + title + ' / ' + meeting_date + ' / ' + num_of_member);
                        this.props.insertContent(info);
                    }
                }
                console.log('MapAndListContainer - handleInsert END (success)');
            }) // success
            .catch( response => {
                console.log(response); 

                // // module content
                // this.props.clear();
                // // dummy data
                // const info = {
                //     title: 'dummy data',
                //     meeting_date: '2019-05-25',
                //     region: '안드로메다',
                //     num_of_people: 4,
                //     nick_name: '가을이',
                //     phone_number: '0103493****',
                //     perpose: '관광, 기타',
                //     image_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1920px-Andromeda_Galaxy_%28with_h-alpha%29.jpg',
                //     closed: false
                // };
                // // console.log('dummy info : ' + info);
                // // module content
                // this.props.insertContent(info);
                console.log('MapAndListContainer - handleInsert END (error)');
            }); // error : 실패일 경우 그냥 dummy 채워보자
        }
    };

    handleInsert = (input) => {
        // console.log('MapAndListContainer - handleInsert START');
        // e.preventDefault();
        // module search
        // module search
        // console.log('[handleInsert] region : ' + this.props.region);
        // console.log('[handleInsert] this.props.input : ' + this.props.input);
        // console.log('[handleInsert] input : ' + input);
        // REST
        // if(this.props.input !== this.props.region)
        // {
            this.getListFromServer(input);

            this.props.insertSearch(input);
        // }
        // else
        // {
        //     console.log('[동일한 요청입니다!!]');
        // }
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
        const {input, region, information, count} = this.props;
        const {setFilter} = this.props;
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

                    count={count}

                    handleInsert={this.handleInsert}

                    handleInsertSearch={this.props.insertSearch}

                    setFilter={setFilter}
                />
            </div>
       );
    }
}

// [1] props 값으로 넣어 줄 state를 정의
const mapStateToProps = ({search, content}) => ({
    input: search.get('input'),
    region: search.get('region'),
    information: content.get('information'),
    
    count: content.get('count'),

    filter_b: content.get('filter_b')
});

// [2] props 값으로 넣어 줄 action을 정의
const mapDispatchToProps = (dispatch) => ({
    changeInput: (value) => dispatch(searchActions.changeInput(value)),

    insertSearch: (text) => dispatch(searchActions.insert(text)),

    clear: () => dispatch(contentActions.clear()),
    insertContent: (info) => dispatch(contentActions.insert(info)),

    setCount: (value) => dispatch(contentActions.setCount(value)),

    setFilter: (value) => dispatch(contentActions.setFilter(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MapAndListContainer);
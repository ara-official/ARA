// import
import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// axios`
// import axios from 'axios';

// type
const CHANGE_INPUT = 'search/CHANGE_INPUT';
const INSERT = 'search/INSERT';

// action
export const changeInput = createAction(CHANGE_INPUT, value => value); // 두 번째 param: payloadCreator, 세 번째 param: metaCreator
export const insert = createAction(INSERT, text => text);

//////////////////
// example
//////////////////

// const initialState = {
//     input: '',
//     todos: [
//         {
//             id: 0,
//             text: '걷기',
//             checked: false
//         },
//         {
//             id: 1,
//             text: '코딩',
//             checked: true
//         }
//     ]
// }
const initialState = Map({
    input: '',
    region: '검색' // 서버로 반복 요청하는 경우 막기 위해 사용
    // todos: List([
    //     Map({
    //         id: 0,
    //         text: '걷기',
    //         checked: false
    //     }),
    //     Map({
    //         id: 1,
    //         text: '코딩하기',
    //         checked: false
    //     })
    // ])
});

// let nextState = null;

// nextState = {
//     ...state,
//     input: '새로운 값'
// };

// nextState = {
//     ...state,
//     todos: state.todos.concat({
//         id: 2,
//         text: '새로운거',
//         checked: false
//     })
// };

// const nextTodos = [...state.todos];
// nextTodos[0] = {
//     ...nextTodos[0],
//     checked: !nextTodos.checked
// }

// nextState = {
//     ...state,
//     todos: nextTodos
// 


// REST API 예시
// const getNumberAll = () => {
//     return axios.get('http://172.20.10.5:8000/api/v1/contents/')
//     .then( response => { console.log(response); }) // success
//     .catch( response => { console.log(response); }); // error
// };

// const getNumber = (region) => {
//     return axios.get('http://172.20.10.5:8000/api/v1/contents/1')
//     .then( response => { console.log(response); }) // success
//     .catch( response => { console.log(response); }); // error
// };
// getNumber();

// const postNumber = (title, meeting_date, num_of_member) => {
// const postNumber = (title, meeting_date, region, num_of_people, nick_name, phone_number, perpose, image_path) => {
//     axios.post('http://172.20.10.5:8000/api/v1/contents/', {
//         title: '경복궁 네 명 모아 봅니다.',
//         meeting_date: '10/10',
//         region: '경복궁',
//         num_of_people: 0,
//         nick_name: '최*훈',
//         phone_number: '0103493****',
//         perpose: '관광, 기타',
//         image_path: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true'
//     // axios.post('https://reqres.in/api/users', {
//     //     title: "POST",
//     //     data: {
//     //         name: "paul rudd",
//     //         movies: ["I Love You Man", "Role Models"]
//     //     }
//     })
//     .then( response => { console.log(response) } )
//     .catch( response => { console.log(response) } );
// };
// postNumber();

// 위 예시는 아래와 같이 바꿔줄 수 있음.
// reducer
export default handleActions({
    [CHANGE_INPUT]: (state/*현재 state*/, action/*action 객체*/) => state.set('input', action.payload),
    [INSERT]: (state, {payload: text}) => {
        console.log('handleActions [INSERT]');
        // getNumberAll();
        // const test = getNumber('1');
        // console.log('test : ' + test);
        // postNumber();
        // postNumber("나 너.. 좋아하니?", "2019-04-29", "3명");
        return state.set('region', text )
    }
}, initialState);
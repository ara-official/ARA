// import
import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// axios
import axios from 'axios';

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
    destination: 'empty'
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
const getNumber = () => {
    axios.get('http://172.20.10.5:8000/api/v1/contents/')
    .then( response => { console.log(response); }) // success
    .catch( response => { console.log(response); }); // error
};
getNumber();

const postNumber = (title, meeting_date, num_of_member) => {
    axios.post('http://172.20.10.5:8000/api/v1/contents/', {
        title: title,
        meeting_date: meeting_date,
        num_of_member: num_of_member

    // axios.post('https://reqres.in/api/users', {
    //     title: "POST",
    //     data: {
    //         name: "paul rudd",
    //         movies: ["I Love You Man", "Role Models"]
    //     }
    })
    .then( response => { console.log(response) } )
    .catch( response => { console.log(response) } );
};
// postNumber();

// 위 예시는 아래와 같이 바꿔줄 수 있음.
// reducer
export default handleActions({
    [CHANGE_INPUT]: (state/*현재 state*/, action/*action 객체*/) => state.set('input', action.payload),
    [INSERT]: (state, {payload: text}) => {
        {console.log('handleActions [INSERT]')}
        // getNumber();
        postNumber("나 너.. 좋아하니?", "2019-04-29", "3명");
        return state.set('destination', text )
    }
}, initialState);
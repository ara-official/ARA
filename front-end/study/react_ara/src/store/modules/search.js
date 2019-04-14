// import
import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

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
// }

// 위 예시는 아래와 같이 바꿔줄 수 있음.
// reducer
export default handleActions({
    [CHANGE_INPUT]: (state/*현재 state*/, action/*action 객체*/) => state.set('input', action.payload),
    [INSERT]: (state, {payload: text}) => state.set('destination', text )
}, initialState);
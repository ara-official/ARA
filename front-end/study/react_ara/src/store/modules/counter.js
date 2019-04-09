import { createAction, handleActions } from 'redux-actions';
// action
    // 타입
const INCREMENT = 'counter/INCREMENT'


    // 생성 함수
export const increment = createAction(INCREMENT, value => value);

// 초기값
const initialState = {
    number: ''
}

// reducer
export default handleActions({
    // [INCREMENT]: ({number}) => ({number : number + 1})
    [INCREMENT]: ({number}, action) => ({number : '' + action.payload})
}, initialState);
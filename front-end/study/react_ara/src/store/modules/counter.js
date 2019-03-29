import { createAction, handleActions } from 'redux-actions';
// action
    // 타입
const INCREMENT = 'counter/INCREMENT'

    // 생성 함수
export const increment = createAction(INCREMENT);

// 초기값
const initialState = {
    count: 3
}

// reducer
export default handleActions({
    [INCREMENT]: ({count}) => ({count : count + 1})
}, initialState);
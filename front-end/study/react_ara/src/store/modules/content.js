// import
import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// axios
// import axios from 'axios';

// type
const SET_CONTENT_DATA = 'content/SET_CONTENT_DATA';

// action
export const setContentData = createAction(SET_CONTENT_DATA, info => info); // 두 번째 param: payloadCreator, 세 번째 param: metaCreator

const initialState = Map({
    info: {
        id: 0,
        title: '',
        destination: '',
        numOfpeople: 0,
        nickName: '',
        phone: '',
        perpose: '',
        imgSrc: ''
    }
});

// reducer
export default handleActions({
    [SET_CONTENT_DATA]: (state, {payload: info}) => {
        {console.log('handleActions [SET_CONTENT_DATA]')}
        {console.log(info)}

        return state.set('info', info )
    }
}, initialState);
// import
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// axios
// import axios from 'axios';

// import dummy_image_1 from '../../img/dummy_img/image_1.jpg';
// import dummy_image_2 from '../../img/dummy_img/image_2.jpg';
// import dummy_image_3 from '../../img/dummy_img/image_3.jpg';
// import dummy_image_4 from '../../img/dummy_img/image_4.png';
// import dummy_image_5 from '../../img/dummy_img/image_5.jpg';
// import dummy_image_6 from '../../img/dummy_img/image_6.jpg';

// type
const SET_CONTENT_DATA = 'content/SET_CONTENT_DATA';
const INSERT = 'content/INSERT';
const UPDATE = 'content/UPDATE';
const CLEAR = 'content/CLEAR';
const REMOVE = 'content/DELETE';

const SET_COUNT = 'content/SET_COUNT';

const SET_FILTER = 'content/SET_FILTER';

// action
export const setContentData = createAction(SET_CONTENT_DATA, inputInfo => inputInfo); // 두 번째 param: payloadCreator, 세 번째 param: metaCreator
    // CreateContent 에서 사용
export const insert = createAction(INSERT, inputInfo => inputInfo);
export const update = createAction(UPDATE, id => id);

export const clear = createAction(CLEAR);
export const remove = createAction(REMOVE, id => id);

export const setCount = createAction(SET_COUNT, value => value);

export const setFilter = createAction(SET_FILTER, arr => arr);

let count = 0;
const empty = List();
const initialState = Map({
    count: 0,
    filter_a: '',
    filter_b: '',
    filter_c: '',
    info: {
        input__id: 0,
        input__db_id: 0,
        input__title: 'info 의 title',
        input__meeting_date: '',
        input__region: '',
        input__num_of_people: 0,
        input__nick_name: '',
        input__phone_number: '',
        input__perpose: '',
        input__image_path: ''
    },
    information: List([
        // Map({
        //   id: 0,
        //   db_id: 0,
        //   title: '강남 쉐이크쉑 같이 드실 1~2 분 구해요~',
        //   meeting_date: '10/10',
        //   region: '강남',
        //   num_of_people: 0,
        //   nick_name: '알*고',
        //   phone_number: '0103223****',
        //   perpose: '점심식사',
        //   image_path: dummy_image_1,
        //   closed: false
        // })
        // ,
        // Map({
        //   id: 1,
        //   title: '경복궁 네 명 모아 봅니다.',
        //   meeting_date: '10/10',
        //   region: '경복궁',
        //   num_of_people: 0,
        //   nick_name: '최*훈',
        //   phone_number: '0103493****',
        //   perpose: '관광, 기타',
        //   image_path: dummy_image_2,
        //   closed: false
        // })
        // ,
        // Map({
        //   id: 2,
        //   title: '첨성대 구경 후에 식사 하실 세 분 구해요',
        //   meeting_date: '10/10',
        //   region: '경주',
        //   num_of_people: 4,
        //   nick_name: '손*식',
        //   phone_number: '0109394****',
        //   perpose: '관광, 식사',
        //   image_path: dummy_image_3,
        //   closed: false
        // })
        // ,
        // Map({
        //   id: 3,
        //   title: '부산타워 구경!! 한 두 명 구해요',
        //   meeting_date: '10/10',
        //   region: '부산',
        //   num_of_people: 4,
        //   nick_name: '권*한',
        //   phone: '010-7557-****',
        //   perpose: '관광',
        //   image_path: dummy_image_4,
        //   closed: false
        // })
        // ,
        // Map({
        //   id: 4,
        //   title: '수원화성 구경',
        //   meeting_date: '10/10',
        //   region: '수원',
        //   num_of_people: 4,
        //   nick_name: '민*식',
        //   phone: '010-1332-****',
        //   perpose: '관광, 커타',
        //   image_path: dummy_image_5,
        //   closed: false
        // })
        // ,
        // Map({
        //   id: 5,
        //   title: '가을',
        //   meeting_date: '10/10',
        //   region: '가을',
        //   num_of_people: 0,
        //   nick_name: '손*식',
        //   phone: '010-3434-****',
        //   perpose: '기타',
        //   image_path: dummy_image_6,
        //   closed: false
        // })
      ])
});

// reducer
export default handleActions({
    [SET_CONTENT_DATA]: (state, {payload: inputInfo}) => {
        return state.set('info', inputInfo.toJS());
    }
    ,
    [INSERT]: (state, { payload: inputInfo }) => {
        // console.log('reducer - content [INSERT] - count : ' + count);
        // const input__title = inputInfo.toJS().title;
        const item = Map({ 
            id: count++,
            db_id: inputInfo.id,
            title: inputInfo.title,
            meeting_date: inputInfo.meeting_date,
            region: inputInfo.region,
            num_of_people: inputInfo.num_of_people,
            nick_name: inputInfo.nick_name,
            phone_number: inputInfo.phone_number,
            perpose: inputInfo.perpose, 
            image_path: inputInfo.image_path,
            closed: false
        });
        // console.log('item : ' + item);
        return state.update('information', information => information.push(item));
    }
    ,
    [UPDATE]: (state, {payload: id}) => {
        console.log('reducer - content [UPDATE]');
        return state.updateIn(['information', id, 'closed'], closed => !closed);
    }
    ,
    [CLEAR]: (state) => {
        console.log('reducer - content [CLEAR]');
        // console.log('count before : ' + count);
        count = 0; // count 같은 경우는, 그냥 일반 변수..
        // console.log('count after : ' + count);
        return state.set('information', empty);
    },
    [REMOVE]: (state, { payload: db_id}) => {
        console.log('[REMOVE] id : ' + db_id);
        const id = state.get('information').findIndex(item => item.get('db_id') === db_id);
        return state.deleteIn(['information', id]);
    },
    [SET_COUNT]: (state, { payload: value }) => {
        return state.set('count', value);
    },
    [SET_FILTER]: (state, { payload: arr}) => {
        console.log('[SET_FILTER] arr : ' + arr.id + ', ' + arr.value);
        if(arr.id === 0) // date
        {
            console.log('filter_a');
            return state.set('filter_a', arr.value);
        }
        else if(arr.id === 1) // num_of_people
        {
            console.log('filter_b');
            return state.set('filter_b', arr.value);
        }
        else if(arr.id === 2) // etc
        {
            console.log('filter_c');
            return state.set('filter_c', arr.value);
        }
        
    }
}, initialState);
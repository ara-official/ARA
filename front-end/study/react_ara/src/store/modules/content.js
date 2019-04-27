// import
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// axios
// import axios from 'axios';

// type
const SET_CONTENT_DATA = 'content/SET_CONTENT_DATA';
const INSERT = 'content/INSERT';
const UPDATE = 'content/UPDATE';

// action
export const setContentData = createAction(SET_CONTENT_DATA, inputInfo => inputInfo); // 두 번째 param: payloadCreator, 세 번째 param: metaCreator
    // CreateContent 에서 사용
export const insert = createAction(INSERT, inputInfo => inputInfo);
export const update = createAction(UPDATE, id => id);

let count = 2;
const initialState = Map({
    info: {
        input__id: 0,
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
        Map({
          id: 0,
          title: '강남 쉐이크쉑 같이 드실 1~2 분 구해요~',
          meeting_date: '10/10',
          region: '강남',
          num_of_people: 0,
          nick_name: '알*고',
          phone_number: '0103223****',
          perpose: '점심식사',
          image_path: 'http://img.seoul.co.kr/img/upload/2016/07/19/SSI_20160719141317_V.jpg',
          closed: false
        }),
        Map({
          id: 1,
          title: '경복궁 네 명 모아 봅니다.',
          meeting_date: '10/10',
          region: '경복궁',
          num_of_people: 0,
          nick_name: '최*훈',
          phone_number: '0103493****',
          perpose: '관광, 기타',
          image_path: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true',
          closed: false
        })
        // ,
        // {
        //   id: 2,
        //   title: '첨성대 구경 후에 식사 하실 세 분 구해요',
        //   destination: '경주',
        //   numOfpeople: 4,
        //   nickName: '손*식',
        //   phone: '010-9394-****',
        //   perpose: '관광, 식사',
        //   imgSrc: 'https://image.ytn.co.kr/general/jpg/2016/0914/201609141101410773_t.jpg'
        // },
        // {
        //   id: 3,
        //   title: '부산타워 구경!! 한 두 명 구해요',
        //   destination: '부산',
        //   numOfpeople: 4,
        //   nickName: '권*한',
        //   phone: '010-7557-****',
        //   perpose: '관광',
        //   imgSrc: 'https://news.busan.go.kr/comm/getImage?srvcId=MEDIA&upperNo=1666&fileTy=MEDIA&fileNo=1'
        // },
        // {
        //   id: 4,
        //   title: '수원화성 구경',
        //   destination: '수원',
        //   numOfpeople: 4,
        //   nickName: '민*식',
        //   phone: '010-1332-****',
        //   perpose: '관광, 커타',
        //   imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Bifyu_8.jpg'
        // },
        // {
        //   id: 5,
        //   title: '가을',
        //   destination: '가을',
        //   numOfpeople: 0,
        //   nickName: '손*식',
        //   phone: '010-3434-****',
        //   perpose: '기타',
        //   imgSrc: 'https://github.com/ara-official/ARA/blob/master/front-end/img/gauri.jpeg?raw=true'
        // }
      ])
});

// reducer
export default handleActions({
    [SET_CONTENT_DATA]: (state, {payload: inputInfo}) => {
        console.log('handleActions [SET_CONTENT_DATA]');
        return state.set('info', inputInfo.toJS());
    }
    ,
    [INSERT]: (state, { payload: inputInfo }) => {
        console.log('handleActions [INSERT] - count : ' + count);
        // const input__title = inputInfo.toJS().title;
        const item = Map({ 
            id: count++,
            title: inputInfo, 
            // destination: info.destination, 
            // numOfpeople: info.numOfpeople, nickName: info.nickName, 
            // phone: info.phone, perpose: info.perpose, 
            // imgSrc: info.imgSrc
            image_path: 'https://avatars1.githubusercontent.com/u/47748609?s=200&v=4',
            closed: false
        });
        return state.update('information', information => information.push(item));
    }
    ,
    [UPDATE]: (state, {payload: id}) => {
        console.log('handleActions [UPDATE]');
        return state.updateIn(['information', id, 'closed'], closed => !closed);
    }
}, initialState);
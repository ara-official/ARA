// import
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// axios
// import axios from 'axios';

// type
const SET_CONTENT_DATA = 'content/SET_CONTENT_DATA';
const INSERT = 'content/INSERT';
// const UPDATE = 'content/UPDATE';

// action
export const setContentData = createAction(SET_CONTENT_DATA, info => info); // 두 번째 param: payloadCreator, 세 번째 param: metaCreator
export const insert = createAction(INSERT, value => value);
// export const update = createAction(UPDATE, value => value);

let count = 2;
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
    },
    // information: List()
    information: List([
        Map({
          id: 0,
          title: '강남 쉐이크쉑 같이 드실 1~2 분 구해요~',
          destination: '강남',
          numOfpeople: 0,
          nickName: '알*고',
          phone: '010-3223-****',
          perpose: '점심식사',
          imgSrc: 'http://img.seoul.co.kr/img/upload/2016/07/19/SSI_20160719141317_V.jpg'
        }),
        Map({
          id: 1,
          title: '경복궁 네 명 모아 봅니다.',
          destination: '경복궁',
          numOfpeople: 0,
          nickName: '최*훈',
          phone: '010-3493-****',
          perpose: '관광, 기타',
          imgSrc: 'https://github.com/ara-official/ARA/blob/master/front-end/img/seoul.jpg?raw=true'
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
    [SET_CONTENT_DATA]: (state, {payload: info}) => {
        {console.log('handleActions [SET_CONTENT_DATA]')}
        {console.log(info)}

        return state.set('info', info )
    },
    [INSERT]: (state, { payload: value }) => {
        console.log('handleActions - info : ' + value);
        console.log('handleActions - count : ' + count);
        const item = Map({ 
            id: count++,
            title: value, 
            // destination: info.destination, 
            // numOfpeople: info.numOfpeople, nickName: info.nickName, 
            // phone: info.phone, perpose: info.perpose, 
            // imgSrc: info.imgSrc
            imgSrc: 'http://img.seoul.co.kr/img/upload/2016/07/19/SSI_20160719141317_V.jpg'
        });
        return state.update('information', information => information.push(item));
    }
    // [UPDATE]: () => {}
}, initialState);
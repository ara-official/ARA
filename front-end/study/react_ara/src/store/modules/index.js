import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import content from './content';

export default combineReducers({
    counter,
    search,
    content
});
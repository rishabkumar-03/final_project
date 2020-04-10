import { combineReducers } from 'redux';
import ListsReducer from './listreducer';



export default combineReducers({
    lists: ListsReducer,
});
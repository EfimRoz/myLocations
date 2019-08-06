import locationReducer from "./locations";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ locations:locationReducer });
export default rootReducer;
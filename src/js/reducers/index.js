import locationReducer from "./locations";
import groupReducer from "./groups"
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ locations:locationReducer, groups: groupReducer });
export default rootReducer;
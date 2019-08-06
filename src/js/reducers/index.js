import locationReducer from "./locations";
import categoryReducer from "./categories"
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ locations:locationReducer, categories: categoryReducer });
export default rootReducer;
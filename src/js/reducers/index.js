import locationReducer from "./locations";
import categoryReducer from "./categories"
import reductionReducer from "./reductions"
import {combineReducers} from 'redux';

const rootReducer = combineReducers({ locations:locationReducer, categories: categoryReducer, reduction: reductionReducer });
export default rootReducer;
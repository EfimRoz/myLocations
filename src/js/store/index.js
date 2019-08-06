import { createStore } from "redux";
import rootReducer from "../reducers/index";

const reduxState = localStorage.getItem('reduxState');
const persistedState = 
    reduxState ? JSON.parse(reduxState) : {};

const store = createStore(rootReducer, persistedState);


store.subscribe( () => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
import {ADD_CATEGORY} from "../constants/action-types";

const initialState = {
    categories: []
};
const categoryReducer = (state = initialState, action) =>{
    console.log('category reducer', state, 'action',action);
    switch (action.type) {
        case ADD_CATEGORY:
            return { ...state, categories: [...state.categories, action.payload] };
        default:
            return state;
    }
};
export default categoryReducer;

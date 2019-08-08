import { ADD_CATEGORY } from "../constants/action-types";


const initialState = {
    categories: []
};
const categoryReducer = (state = initialState, action) =>{
    console.log('category reducer', state, 'action',action);
    switch (action.type) {
        case ADD_CATEGORY:
            const categories = [...state.categories, action.payload];
            return { ...state, categories };
        default:
            return state;
    }
};
export default categoryReducer;

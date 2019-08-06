import { ADD_CATEGORY } from "../constants/action-types";
import { CATEGORIES } from "../constants/localStorage-names";


const initialState = {
    categories: []
};
const categoryReducer = (state = initialState, action) =>{
    console.log('category reducer', state, 'action',action);
    switch (action.type) {
        case ADD_CATEGORY:
            const categories = [...state.categories, action.payload];
            localStorage.setItem(CATEGORIES, JSON.stringify(categories));
            return { ...state, categories: categories };
        default:
            return state;
    }
};
export default categoryReducer;

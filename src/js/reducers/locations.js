import {ADD_LOCATION} from "../constants/action-types";

const initialState = {
    locations: []
};
const locationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_LOCATION:
            return { ...state, locations: [...state.locations, action.payload] };
        default:
            return state;
    }
};
export default locationReducer;

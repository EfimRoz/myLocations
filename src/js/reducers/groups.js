import {ADD_GROUP} from "../constants/action-types";

const initialState = {
    groups: []
};
const groupReducer = (state = initialState, action) =>{
    console.log('group reducer', state, 'action',action);
    switch (action.type) {
        case ADD_GROUP:
            return { ...state, groups: [...state.groups, action.payload] };
        default:
            return state;
    }
};
export default groupReducer;

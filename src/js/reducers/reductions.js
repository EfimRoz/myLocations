import { CRUDBAR_DELETE, CRUDBAR_UPDATE, CRUDBAR_CREATE } from "../constants/action-types";


const initialState = {
    toggleCreate: false,
    toggleUpdate: false,
    toggleDelete: false
};
const reductionReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CRUDBAR_CREATE:
        console.log('here')
        setTimeout(() => {
            console.log('redux state', state);
        }, 1000);
            return {
                toggleCreate: !state.toggleCreate,
                toggleUpdate: false,
                toggleDelete: false,
            };
        case CRUDBAR_UPDATE:
            return {
                toggleCreate: false,
                toggleUpdate: !state.toggleUpdate,
                toggleDelete: false,
            };
        case CRUDBAR_DELETE:
            return {
                toggleCreate: false,
                toggleUpdate: false,
                toggleDelete: !state.toggleDelete, 
            };
        default:
            return state;
    }
};
export default reductionReducer;
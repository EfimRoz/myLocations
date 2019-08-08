import {ADD_LOCATION, ADD_CATEGORY, CRUDBAR_DELETE, CRUDBAR_UPDATE, CRUDBAR_CREATE} from "../constants/action-types";

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });

export const addCategory = category => ({ type: ADD_CATEGORY, payload: category });


export const initCreate = state => ({ type: CRUDBAR_CREATE });

export const initUpdate = toggle => ({ type: CRUDBAR_UPDATE});

export const initDelete = toggle => ({ type: CRUDBAR_DELETE}); 

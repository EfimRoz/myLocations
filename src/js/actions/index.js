import {ADD_LOCATION, ADD_CATEGORY} from "../constants/action-types";

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });

export const addCategory = category => ({ type: ADD_CATEGORY, payload: category });

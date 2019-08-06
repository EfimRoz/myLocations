import {ADD_LOCATION, ADD_GROUP} from "../constants/action-types";

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });

export const addGroup = group => ({ type: ADD_GROUP, payload: group });

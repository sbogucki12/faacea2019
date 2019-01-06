import axios from 'axios';
import { FETCH_USER, MAKE_EXTERNAL, MAKE_INTERNAL, DETERMINE_CASETYPE } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentuser');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export function makeExternal() {
    return function(dispatch){
        console.log("makeExternal called");
        dispatch({
            type: MAKE_EXTERNAL,
            payload: 'external'
        });
    };
};

export function makeInternal() {
    return function(dispatch){
        console.log("makeInternal called");
        dispatch({
            type: MAKE_INTERNAL,
            payload: 'internal'
        });
    };
};

export function updateCaseType(caseType) {
    return function(dispatch){
        console.log("updateCaseType called");
        dispatch({
            type: DETERMINE_CASETYPE,
            payload: caseType
        })
    }
}
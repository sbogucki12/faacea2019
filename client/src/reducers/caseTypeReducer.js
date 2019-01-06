import { DETERMINE_CASETYPE } from '../actions/types';

const initialState = null;

export default function (state = initialState, action){
    switch(action.type){
        case DETERMINE_CASETYPE: 
        return {
            ...state, 
            caseType: action.payload
        }

        default:
            return state; 
    }
}
import { MAKE_EXTERNAL, MAKE_INTERNAL } from '../actions/types';

const initialState = {

};

export default function (state = initialState, action){
    switch (action.type) {
        case MAKE_EXTERNAL:
        return {
            ...state,
            user: action.payload
        }

        case MAKE_INTERNAL: 
        return {
            ...state, 
            user: action.payload
        }

        default:
            return state; 
    }
}
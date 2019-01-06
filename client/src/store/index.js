import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import reduxThunk from 'redux-thunk';

const initialState = {
    user: "", 
    caseType: ""
}; 
const middleware = [reduxThunk]; 

const store = createStore(
    reducers, 
    initialState,
    compose(
        applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )     
    );

export default store;
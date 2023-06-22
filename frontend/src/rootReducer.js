import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from './components/reducers';

const rootReducer = combineReducers({
    homeReducer
});

export default rootReducer;

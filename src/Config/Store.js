// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import RootReducer from "../Store/Reducers/RootReducer";



// const Store= createStore(RootReducer, applyMiddleware(thunk) );

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import ToDoReducer from "../Store/Reducers/ToDoReducer";
import AuthReducer from "../Store/Reducers/AuthReducer";

import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))



const Store= configureStore({
    reducer:{
        ToDoReducer,
        AuthReducer
    },
    composedEnhancer
});

export default Store;
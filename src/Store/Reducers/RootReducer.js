
import { combineReducers } from "redux";

import ToDoReducer from "./ToDoReducer";

const RootReducer= combineReducers(ToDoReducer);

export default RootReducer;
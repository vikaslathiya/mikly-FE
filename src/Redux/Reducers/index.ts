/**
 *
 * All the reducer will exports from here,
 *
 */

import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";
import { ToastReducer } from "./ToastReducer";

const rootReducer = combineReducers({
  Auth: loginReducer,
  Toast: ToastReducer,
});

export default rootReducer;

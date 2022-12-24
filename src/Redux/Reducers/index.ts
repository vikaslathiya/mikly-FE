/**
 *
 * All the reducer will exports from here,
 *
 */

import { combineReducers } from "redux";
import loginReducer from "./AuthReducer";

const rootReducer = combineReducers({
  Auth: loginReducer,
});

export default rootReducer;

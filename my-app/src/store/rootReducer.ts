import joinReducer from "./joinReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
 login: loginReducer,
 join: joinReducer,
});

export default rootReducer;
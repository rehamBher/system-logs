import { combineReducers } from "redux";
import LogsReducer from "./redux/logs/LogsReducer";
import TechReducer from "./redux/tech/TechReducer";


let rootReducer= combineReducers({
  log:LogsReducer,
  tech:TechReducer

})

export default rootReducer
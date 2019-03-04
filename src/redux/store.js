import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

//create customized logger - see API for all options
const logger = createLogger({
  duration: true,
  timestamp: true,
  diff: true
});

//create store with reducer, middlewares
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//IMPORTANT: logger must be the last function in middleware chain for accurate state/action expectations
export default store;

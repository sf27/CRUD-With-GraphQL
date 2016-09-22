import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import OperationsReducer from "./reducers";
import createLogger from "redux-logger";

const logger = createLogger();
const middlewaresList = [thunk, logger];
const store = compose(applyMiddleware(...middlewaresList))(createStore)(OperationsReducer);
export default store;
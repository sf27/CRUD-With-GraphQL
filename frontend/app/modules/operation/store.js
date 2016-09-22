import {createStore} from "redux";
import OperationsReducer from "./reducers";

const store = createStore(OperationsReducer);
export default store;

import React from "react";
import {Provider} from "react-redux";
import store from "../store";
import OperationC from "../components/OperationC";

const OperationCRoot = () => (
    <Provider store={store}>
        <OperationC />
    </Provider>
);

export default OperationCRoot;
import React from "react";
import {Provider} from "react-redux";
import store from "../store";
import MainC from "../components/MainC";

const MainCRoot = () => (
    <Provider store={store}>
        <MainC />
    </Provider>
);

export default MainCRoot;
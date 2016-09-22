import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import OperationCRoot from "./containers/Root";

render(
    <OperationCRoot />,
    document.getElementById('operation')
);
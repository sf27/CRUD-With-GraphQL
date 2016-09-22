import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {onClickAdd, onClickSubstract} from "../reducers";

class OperationC extends Component {
    render() {
        const {value, onClickAdd, onClickSubstract} = this.props;
        return (
            <div>
                <div>Operation Component</div>
                <h1>Value: {value}</h1>
                <button onClick={onClickAdd}>Add</button>
                <button onClick={onClickSubstract}>Substract</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
{
    value: state
}
);

const mapDispatchToProps = (dispatch) => (
{
    onClickAdd: () => {
        dispatch(onClickAdd());
    },
    onClickSubstract: () => {
        dispatch(onClickSubstract());
    }
}
);

OperationC.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
    onClickSubstract: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationC);
import React, {Component, PropTypes} from "react";

class CounterCategoriesC extends Component {
    render() {
        const {number} = this.props;
        return <div>
            <div className="page-header">
                <h1>Counter</h1>
                <h2>{number}</h2>
            </div>
        </div>
    }
}

CounterCategoriesC.propTypes = {
    number: PropTypes.number.isRequired,
};

export default CounterCategoriesC;
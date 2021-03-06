import React, {Component, PropTypes} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class SaveCategoryC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    handleKeyPress = (event) => {
        if (event.charCode == 13) {
            this.handleSave();
        }
    };

    onSave = () => {
        this.handleSave();
    };

    handleSave = () => {
        if (this.state.message) {
            this.props.submit(this.state.message)
                .then(({data}) => {
                    this.setState({message: ""});
                    this.props.refetch();
                    this.props.onClickAdd();
                }).catch((error) => {
                    console.log('there was an error sending the query', error);
                }
            );
        }
    };

    handleChange = (event) => {
        this.setState({message: event.target.value});
    };

    render() {
        return (
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button className="btn btn-default" onClick={this.onSave}>
                    Save <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                </button>
            </div>
        );
    }
}

SaveCategoryC.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired
};


const SaveCategoryMutation = gql`
    mutation SaveCategoryMutation ($name: String!){
        createCategory(name: $name){
            category {
                name
            }
            ok
        }
    }`;

const SaveCategoryComponent = graphql(SaveCategoryMutation, {
    props: ({mutate}) => ({
        submit: (name) => mutate({variables: {name}}),
    }),
})(SaveCategoryC);

export default SaveCategoryComponent;

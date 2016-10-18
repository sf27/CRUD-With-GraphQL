import React, {Component, PropTypes} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

class DeleteCategoryC extends Component {
    handleClick = () => {
        this.props.submit(this.props.name)
            .then(({data}) => {
                this.props.refetch();
                this.props.onClickSubstract();
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            }
        );
    };

    render() {
        return (
            <button className="btn btn-danger" onClick={this.handleClick}>
                <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
        );
    }
}

DeleteCategoryC.propTypes = {
    submit: PropTypes.func.isRequired,
    refetch: PropTypes.func.isRequired
};

const DeleteCategoryMutation = gql`
    mutation DeleteCategoryMutation ($name: String!){
        deleteCategory(name: $name){
            category {
                name
            }
            ok
        }
    }`;

const DeleteCategoryComponent = graphql(DeleteCategoryMutation, {
    props: ({mutate}) => ({
        submit: (name) => mutate({variables: {name}}),
    }),
})(DeleteCategoryC);

export default DeleteCategoryComponent;
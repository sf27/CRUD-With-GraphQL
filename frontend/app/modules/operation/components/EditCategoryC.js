import React, {Component, PropTypes} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import EditableInput from "react-editable-input";

class EditCategoryC extends Component {
    onSave = (newValue) => {
        this.props.submit(this.props.name, newValue)
            .then(({data}) => {
                console.log('got data', data);
                this.props.refetch();
            }).catch((error) => {
                console.log('there was an error sending the query', error);
            }
        );
    };

    render() {
        const {name} = this.props;
        return (
            <EditableInput onSave={this.onSave} text={name}/>
        )
    }
}

EditCategoryC.propTypes = {
    submit: PropTypes.func.isRequired,
};

const EditCategoryMutation = gql`
    mutation EditCategory ($name: String!, $newName: String!){
      editCategory(name: $name, newName: $newName){
        category {
          name
        }
        ok
      }
    }`;

const EditCategoryComponent = graphql(EditCategoryMutation, {
    props: ({mutate}) => ({
        submit: (name, newName) => mutate({variables: {name, newName}}),
    }),
})(EditCategoryC);

export default EditCategoryComponent;
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {onClickAdd, onClickSubstract} from "../reducers";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import SaveCategoryC from "./SaveCategoryC";
import EditCategoryC from "./EditCategoryC";
import DeleteCategoryC from "./DeleteCategoryC";

class ListCategories extends Component {
    render() {
        const {allCategories, loading, refetch} = this.props.data;
        const {value, onClickAdd, onClickSubstract} = this.props;
        console.log(this.props);
        return (
            <div>
                <div>
                    <ul>
                        {loading ?
                            "Cargando lista de categorias" :
                            allCategories.edges.map((name, index) => {
                                return <li key={ index }>
                                    <EditCategoryC
                                        key={ index }
                                        name={name.node.name}
                                        index={index}
                                        refetch={refetch}
                                    />
                                    <DeleteCategoryC
                                        name={name.node.name}
                                        onClickSubstract={onClickSubstract}
                                        refetch={refetch}
                                    />
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <SaveCategoryC refetch={refetch} onClickAdd={onClickAdd}/>
                </div>
                <div>
                    <h1>Redux Counter</h1>
                    <h2>{value}</h2>
                </div>
            </div>
        )
    }
}

ListCategories.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        allCategories: PropTypes.object,
    }).isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onClickSubstract: PropTypes.func.isRequired,
};

const AllCategories = gql`
    query AllCategories { 
        allCategories {
            edges {
              node {
                name
              }
            }
        } 
    }`;

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

const ListCategoriesComponent = graphql(AllCategories)(ListCategories);

export default connect(mapStateToProps, mapDispatchToProps)(ListCategoriesComponent);
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {onClickAdd, onClickSubstract, addNTimes} from "../reducers";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import SaveCategoryC from "./SaveCategoryC";
import EditCategoryC from "./EditCategoryC";
import DeleteCategoryC from "./DeleteCategoryC";

class CounterCategories extends Component {
    render() {
        const {number} = this.props;
        return <div>
            <h1>Redux Counter</h1>
            <h2>{number}</h2>
        </div>
    }
}

class ListCategories extends Component {
    render() {
        const {allCategories, loading, refetch} = this.props.data;
        const {onClickAdd, onClickSubstract} = this.props;

        return (
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="box">
                        <div className="row">
                            <div className="col-xs-12">
                                {!loading &&
                                <CounterCategories number={allCategories.edges.length}/>
                                }
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <SaveCategoryC refetch={refetch} onClickAdd={onClickAdd}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                {loading ?
                                    "Loading categories" :
                                    allCategories.edges.map((name, index) => {
                                        return <div className="box" key={ index }>
                                            <div className="row">
                                                <div className="col-xs">
                                                    <div className="box">
                                                        <EditCategoryC
                                                            key={ index }
                                                            name={name.node.name}
                                                            index={index}
                                                            refetch={refetch}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs">
                                                    <div className="box">
                                                        <DeleteCategoryC
                                                            name={name.node.name}
                                                            onClickSubstract={onClickSubstract}
                                                            refetch={refetch}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                    </div>
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
    onClickSubstract: PropTypes.func.isRequired
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
    number: state.number
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
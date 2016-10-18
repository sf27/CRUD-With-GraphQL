import React, {Component, PropTypes} from "react";
import EditCategoryC from "./EditCategoryC";
import DeleteCategoryC from "./DeleteCategoryC";

class CategoryItemC extends Component {
    render() {
        const {index, name, refetch, onClickSubstract} = this.props;
        return <div className="row">
            <div className="col-xs-12 col-md-10 col-sm-10">
                <div className="box">
                    <EditCategoryC
                        key={index}
                        name={name.node.name}
                        index={index}
                        refetch={refetch}
                    />
                </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-2">
                <div className="box">
                    <DeleteCategoryC
                        name={name.node.name}
                        onClickSubstract={onClickSubstract}
                        refetch={refetch}
                    />
                </div>
            </div>
        </div>
    }
}

CategoryItemC.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    onClickSubstract: PropTypes.func.isRequired
};

export default CategoryItemC;

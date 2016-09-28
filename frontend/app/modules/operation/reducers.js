import {ADD, ADD_NUMBER, SUBSTRACT} from "./actions";

export const onClickAdd = () => ({type: ADD});
export const onClickSubstract = () => ({type: SUBSTRACT});

/**
 * @return {{number: number}}
 */
const OperationsReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return {number: state.number + 1};
        case SUBSTRACT:
            return {number: state.number - 1};
        default:
            return {number: state};
    }
};

export default OperationsReducer;
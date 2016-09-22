import {ADD, SUBSTRACT} from "./actions";

export const onClickAdd = () => ({type: ADD});
export const onClickSubstract = () => ({type: SUBSTRACT});

/**
 * @return {number}
 */
const OperationsReducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        case SUBSTRACT:
            return state - 1;
        default:
            return state;
    }
};

export default OperationsReducer;
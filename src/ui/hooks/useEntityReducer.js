import {useReducer} from "react";

const useEntityReducer = (entities) => {
    const initialState = createEmptyState(entities);
    const [state, dispatch] = useReducer(reducer, initialState);

    const setState = (type, value) => {
        dispatch({type, value});
    };

    return [state, setState];
};

const createEmptyState = (entities) => {
    const state = {};
    for (const name of Object.keys(entities)) {
        state[name] = null;
    }

    return state;
};

const reducer = (state, action) => {
    if (!state.hasOwnProperty(action.type)) throw new Error("invalid action type");
    return {
        ...state,
        [action.type]: action.value,
    };
};

export default useEntityReducer;
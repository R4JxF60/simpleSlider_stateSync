import Actions from "./Actions.js";

function sideBarReducer(state, action) {
    switch(action.type) {
        case Actions.CHANGE:
            return Object.assign({}, state, { value: action.value });

        default:
            return state;
    }

}

export default sideBarReducer;
import Actions from "./Actions.js";

function change(value) {
    return {
        type: Actions.CHANGE,
        value: value
    };
} 

export default change;
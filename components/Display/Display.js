import {default as STORE} from "../Store/Store.js";
import {default as slideBarAct} from "../SlideBar/Actions.js";
import initState from "./initState.js";

class Display {
    constructor(props) {
        this.props = props;
        this.refs = {};
        this.setSubscriber = this.setSubscriber.bind(this);
        this.setReducer = this.setReducer.bind(this);
        this.setRefs = this.setRefs.bind(this);
        this.listner = this.listner.bind(this);
        //this.setSubscriber('Display', this.listner);
    }

    setReducer(name, reducer, state = initState) {
        STORE.setReducer(name, reducer);
    }

    setSubscriber(name, subscriber) {
        STORE.setSubscriber(name, subscriber);
    }

    setRefs(ref, element) {
        this.refs[ref] = element;
    }

    listner(state, action) {
        switch(action.type) {
            case slideBarAct.CHANGE:
                this.refs.display.textContent = action.value;
                break;
            default: 
        }
    }

    render() {
        return `<h1>${this.props.value}</h1>`;
    }
}

export default Display;
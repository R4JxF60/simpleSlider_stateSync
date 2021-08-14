import initState from "./initState.js";
import {default as STORE} from "../Store/Store.js";

class SlideBar {
    constructor(props) {
        this.props = props;
        this.setReducer = this.setReducer.bind(this);
        this.setSubscriber = this.setSubscriber.bind(this);
    }

    setReducer(name, reducer, state = initState) {
        STORE.setReducer(name, reducer);
    }

    setSubscriber(name, subscriber) {
        STORE.setSubscriber(name, subscriber);
    }

    render() {
        return `
        <input type="range" min=${this.props.min} max=${this.props.max} value=${this.props.value} step="1" id="sliderbar__div-range">
        `;
    }
}

export default SlideBar;
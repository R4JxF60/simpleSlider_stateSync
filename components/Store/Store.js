class Store {
    constructor() {
        this.state = {};
        this.subscribers = {};
        this.reducers = {};
        this.getState = this.getState.bind(this);
        this.setSubscriber = this.setSubscriber.bind(this);
        this.setReducer = this.setReducer.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    getState() {
        return this.state;
    }

    setSubscriber(name, subscriber) {
        this.subscribers[name] = subscriber;
        return () => {
            delete this.subscribers[name];
        }
    }

    setReducer(name, reducer, state={}) {
        this.state[name] = state;
        this.reducers[name] = reducer;
    }

    dispatch(action) {
        let updatedState = {};
        console.log(action);
        console.log(this.reducers);
        const reducersNameList = Object.keys(this.reducers);
        const subscribersNameList = Object.keys(this.subscribers);

        reducersNameList.forEach(reducerName => {
            const currentState = this.state[reducerName];
            console.log(reducersNameList);
            updatedState = this.reducers[reducerName](currentState, action);
            this.state[reducerName] = Object.assign({}, currentState, updatedState);
        });

        subscribersNameList.forEach(subscriber => {
            if(this.subscribers[subscriber])
                this.subscribers[subscriber](this.state, action);
        });
    }
}

export default new Store();
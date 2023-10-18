import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialStore = {
    counter: {
        value: 0,
        step: 1
    }
};

const reducer = (state = initialStore, action) => {
    switch(action.type){
        case 'counter/Increment':
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value + action.payload
                }
            };

        case 'counter/Decrement':
            return {
                ...state,
                counter: {
                    ...state.counter,
                    value: state.counter.value - action.payload,
                }
            };

        default:
            return state;
    }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
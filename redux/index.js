import {createStore, applyMiddleware} from 'redux';
import {Context, MakeStore, createWrapper} from 'next-redux-wrapper';
import { reducer } from './reducers';
import thunk from 'redux-thunk';


// create a makeStore function
const makeStore = Context => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});

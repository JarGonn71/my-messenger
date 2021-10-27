import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import thunk from "redux-thunk";
import {combineReducers, createStore, applyMiddleware} from "redux";

import {AuthUserReducer} from './reducers'


const rootReducer = combineReducers({
  auth : AuthUserReducer,
})

// create your reducer
const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }
      if (state.count) nextState.count = state.count // preserve count value on client side navigation
      return nextState
    } else {
      return rootReducer(state, action)
    }
  }
  

// create a makeStore function
const makeStore = context => createStore( 
    reducer,
    applyMiddleware(thunk)
);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
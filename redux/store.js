import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import {userReducer} from './slices/user'

export function makeStore() {
  return configureStore({
    reducer: { 
        user: userReducer 
    },
  })
}

export const store = makeStore()

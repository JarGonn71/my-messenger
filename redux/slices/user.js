import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'


const initialState = {
  data: null,
  dialogs: [],
  users: []
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload
    },
    setDialogsData: (state, action) => {
      state.dialogs = action.payload
    },
    setUsersList: (state, action) => {
      state.users = action.payload
    },
  },
  extraReducers:{
    [HYDRATE]: (state, action) => {
      return{
        ...state,
        data: action.payload.user.data,
        dialogs: action.payload.user.dialogs,
        users: action.payload.user.users
      }
    }
  }
})

export const { setUserData } = userSlice.actions
export const { setDialogsData } = userSlice.actions
export const { setUsersList } = userSlice.actions


export const selectUserData = (state) => state.user.data
export const selectDialogsData = (state) => state.user.dialogs



export const userReducer = userSlice.reducer
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  data: null
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload
    },
    
  }
})

export const { setUserData } = userSlice.actions


export const selectUserData = (state) => state.user.data



export const userReducer = userSlice.reducer
import { createSlice } from "@reduxjs/toolkit"

const initialState = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : { user: null, token: null }


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {user, token} = action.payload
            state.user = user
            state.token = token
        },
    }
})

export const { login } = authSlice.actions

export default authSlice.reducer

export const selectAuth = (state) => state.auth
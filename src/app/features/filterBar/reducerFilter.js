import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filterBar',
    initialState: {
        value: false
    },
    reducers: {
        openBar: state => {state.value = true},
        close: state => {state.value = false},

    }
})

// Action creators are generated for each case reducer function
export const { openBar, close } = filterSlice.actions

export default filterSlice.reducer
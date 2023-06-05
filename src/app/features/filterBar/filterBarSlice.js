import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    value: false,
    category: [],
    tags: []
}

export const fetchCategories = createAsyncThunk('filterBar/fetchCategories', async () => {
    const response = await axios('https://dapur-solo.cyclic.app/api/categories')
    return response.data

})

export const fetchTags = createAsyncThunk('filterBar/fetchTags', async () => {
    const response = await axios('https://dapur-solo.cyclic.app//api/tags')
    return response.data
})

export const filterSlice = createSlice({
    name: 'filterBar',
    initialState,
    reducers: {
        openBar: state => { state.value = true },
        close: state => { state.value = false },

    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.category = action.payload
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.tags = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { openBar, close } = filterSlice.actions

export default filterSlice.reducer

export const selectCategories = (state) => state.filterBar.category

export const selectTagsBar = (state) => state.filterBar.tags
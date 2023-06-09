import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const endPoint = process.env.REACT_APP_END_POINT
const initialState = {
    products: [],
    status: 'pending',
    error: null,
    skip: 0,
    limit: 8,
    category: '',
    tags: []
}

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async ({ skip, limit, category, tags }) => {
        let tagsString = tags.join('&tags=')
        const response = await axios(`${endPoint}/api/products?skip=${skip}&limit=${limit}&category=${category}&tags=${tagsString}`)
        return response.data
    })

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addedSkip: (state) => { state.skip = state.skip + state.limit },
        subtractedSkip: (state) => { state.skip = state.skip - state.limit },
        addedCategory: (state, action) => { state.category = action.payload },
        addedTags: (state, action) => { state.tags = action.payload },
        deleteTags: (state, action) => {
            let indexTag = state.tags.indexOf(action.payload)
            state.tags.splice(indexTag, 1)
        },
        deletedAllTags: (state) => { state.tags = [] }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
                // console.log(action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { addedSkip, subtractedSkip, addedCategory, addedTags, deleteTags, deletedAllTags } = productSlice.actions

export default productSlice.reducer

export const selectAllProducts = (state) => state.products.products
export const selectSkip = (state) => state.products.skip
export const selectLimit = (state) => state.products.limit
export const selectCategory = (state) => state.products.category
export const selectTags = (state) => state.products.tags








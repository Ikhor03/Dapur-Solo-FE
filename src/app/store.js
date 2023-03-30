import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/Cart/reducer'
import  filterSlice  from './features/filterBar/reducerFilter'

export default configureStore({
    reducer: {
        carts: cartReducer,
        FilterBar: filterSlice,
    }
})
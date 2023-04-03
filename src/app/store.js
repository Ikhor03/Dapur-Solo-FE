import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/Cart/reducer'
import  filterSlice  from './features/filterBar/filterBarSlice'
import productSlice from './features/Product/productsSlice'

export default configureStore({
    reducer: {
        carts: cartReducer,
        filterBar: filterSlice,
        products: productSlice,
    }
})
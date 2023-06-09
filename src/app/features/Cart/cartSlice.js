import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../../utils/getToken";

const token = getToken()
const endPoint = process.env.REACT_APP_END_POINT

export const fetchCart = createAsyncThunk('cart/fetchCart',
    async () => {
        const response = await axios(`${endPoint}/api/cart`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
        return response.data
    })

export const updateCart = createAsyncThunk('cart/updateCart',
    async (item) => {
        const response = await axios.put(`${endPoint}/api/cart`,
            { items: item },
            { headers: { Authorization: `Bearer ${token}` } }
        )
        console.log(response.data)
        return response.data
    })

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    status: 'pending',
    error: null
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cart.find((x) => x._id === item._id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((x) =>
                        x._id === existingItem._id ? { ...x, quantity: x.quantity + 1 } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...item, quantity: 1 }],
                };
            }
        },
        setCart: (state, action) => {
            return {
                ...state,
                cart: action.payload
            }
        },
        removeCart: (state, action) => {
            return {
                ...state,
                cart: state.cart.filter((x) => x._id !== action.payload),
            }
        },
        updateQuantity: (state, action) => {
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x._id === action.payload.id ? { ...x, quantity: action.payload.quantity } : x
                ),
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCart.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.cart = action.payload
                // console.log(action.payload)
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                state.cart.push(action.payload.data)
            })
    }
})

export const { addToCart, setCart, removeCart, updateQuantity } = cartSlice.actions

export default cartSlice.reducer

export const selectCart = (state) => state.carts.cart








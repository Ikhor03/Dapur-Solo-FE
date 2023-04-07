import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART, UPDATE_QUANTITY } from "./constans";

const initialState = {
    cart: [],
};
initialState.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
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
                    cart: [...state.cart, {...item, quantity: 1 }],
                };
            }

        case SET_CART:
            return {
                ...state,
                cart: action.payload
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((x) => x._id !== action.payload),
            };

        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x._id === action.payload.id ? { ...x, quantity: action.payload.quantity } : x
                ),
            };

        default:
            return state;
    }
};

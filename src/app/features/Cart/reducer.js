import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "../constants";

const initialState = {
    cart: [
        {
            id: 2,
            name: 'nasgor test',
            price: 25000,
            qty: 2
        }
    ],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existingItem = state.cart.find((x) => x.id === item.id);
            if (existingItem) {
                return {
                    ...state,
                    cart: state.cart.map((x) =>
                        x.id === existingItem.id ? { ...x, quantity: x.quantity + 1 } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item],
                };
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((x) => x.id !== action.payload),
            };

        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((x) =>
                    x.id === action.payload.id ? { ...x, quantity: action.payload.quantity } : x
                ),
            };

        default:
            return state;
    }
};

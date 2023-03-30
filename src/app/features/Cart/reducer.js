import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./constans";

const initialState = {
    cart: [
        {
            id: 1,
            name: 'nasgor 1',
            price: 27000,
            qty: 3
        },
        {
            id: 5,
            name: 'Nasgor 2',
            price: 15000,
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
                    x.id === action.payload.id ? { ...x, qty: action.payload.quantity } : x
                ),
            };

        default:
            return state;
    }
};

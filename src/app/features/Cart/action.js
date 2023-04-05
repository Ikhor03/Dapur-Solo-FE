import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART, UPDATE_QUANTITY } from "./constans";

export const addToCart = (product) => (dispatch, getState) => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image_url,
            quantity: 1,
        },
    });
};

export const setCart = (product) => (dispatch, getState) => {
    dispatch({
        type: SET_CART,
        payload: product,
    })
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
};

export const updateQuantity = (id, quantity) => (dispatch, getState) => {
    dispatch({ type: UPDATE_QUANTITY, payload: { id, quantity } });
};

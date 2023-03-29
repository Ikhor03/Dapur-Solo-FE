import React from "react";
// import { useSelector } from "react-redux";
import CartItem from "../components/cartItem";

const Cart = () => {
    const carts = [''] //anggap ini state cart
    // const cart = useSelector((state) => state.cart);

    // const total = carts.reduce((acc, item) => {
    //     return acc + item.price * item.qty;
    // }, 0);

    return (
        <div className="flex flex-col items-center py-8">
            <h2 className=" text-4xl font-bold mb-4">Shopping Cart</h2>
            {carts.length === 0 ? (
                <div className="mt-5">
                    <p>Your cart is empty.</p>
                    <br/>
                    <a href="home" className="font-medium text-indigo-600 hover:text-indigo-500">Order Sekarang &rarr;</a>
                </div>
            ) : (
                <>
                    {/* <div className="w-full grid grid-cols-4 gap-4 mb-8 justify-items-center">
                        <div className="font-bold">Product</div>
                        <div className="font-bold">Price</div>
                        <div className="font-bold">Quantity</div>
                    </div> */}
                    <CartItem />
                    {/* <div className="text-right font-bold text-xl mt-4">
                        Total: ${total}
                    </div>
                    <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-4">
                        Checkout
                    </button> */}
                </>
            )}
        </div>
    );
};

export default Cart;

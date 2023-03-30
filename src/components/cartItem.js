import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../app/features/Cart/action";

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value);
        dispatch(updateQuantity(item.id, quantity));
    };

    const handleRemove = () => {
        alert('Yakin gajadi pesan?')
        dispatch(removeFromCart(item.id));
    };




    return (
        <div className="flex border-t md:w-full max-w-xl h-full flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                        src="https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png"
                                        alt="{product.imageAlt}"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="/shop">{item.name}</a>
                                            </h3>
                                            <p className="ml-4">Rp. {item.price * item.qty}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">Rp{item.price}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex">
                                            <p className="text-gray-500">
                                                Qty
                                            </p>
                                            {/* <button > - </button> */}
                                            {/* <span className="ml-2 w-10 border text-center">{item.qty}</span> */}
                                            <input className="ml-2 w-10 border text-center" type='number' min='1' value={item.qty} onChange={handleQuantityChange} />
                                            {/* <button onClick={handleQuantityChange}> + </button> */}
                                        </div>

                                        <div className="flex">
                                            <button
                                                type="button"
                                                className="font-medium text-amber-600 hover:text-amber-500"
                                                onClick={handleRemove}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CartItem;

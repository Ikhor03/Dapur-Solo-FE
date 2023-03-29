import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromCart, updateQuantity } from "../app/features/Cart/action";

const CartItem = () => {
    const carts = [
        {
            id: 1,
            name: "nasgor 1",
            price: 25000,
            qty: 2
        },
        {
            id: 2,
            name: "esteh 2",
            price: 5000,
            qty: 1
        },
    ]  // fake data

    // const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        console.log('quantity change')
        // const quantity = parseInt(e.target.value);
        // dispatch(updateQuantity(item.id, quantity));
    };

    const handleRemove = () => {
        console.log('removed')
        // dispatch(removeFromCart(item.id));
    };

    const total = carts.reduce((acc, item) => {
        return acc + item.price * item.qty;
    }, 0);

    return (
        <div className="flex border-t md:w-full max-w-xl h-full flex-col bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {carts.map((item) => (
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
                                                <p className="ml-4">{item.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500">"Paket lengkap"</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                                Qty
                                                <input className="ml-2 w-10 border text-center" type='number' value={item.qty} onChange={handleQuantityChange} />
                                            </p>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                    onClick={handleRemove}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>Rp{total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p className="mr-2">or</p>
                    <a
                        href="home"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    // onClick={() => setOpen(false)}
                    >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

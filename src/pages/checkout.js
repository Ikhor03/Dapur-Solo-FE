import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cartItem";
import CheckboxAddress from "../components/checkboxAddress";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCart } from "../app/features/Cart/action";

export default function Checkout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const carts = useSelector((state) => state.carts.cart)
    const [order_id, setOrder_id] = useState()
    const [delivery_address, setDelivery_address] = useState({})
    const { token } = JSON.parse(localStorage.getItem('auth'))
    let delivery_fee = 15000

    const subtotal = carts.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);
    const total = subtotal + delivery_fee

    const getDeliveryAddress = (address) => {
        setDelivery_address(address)
    }

    const handleChekout = async () => {

        await axios.post(`http://localhost:3000/api/orders`,{
                delivery_fee,
                delivery_address
            },
            { headers: { authorization: `Bearer ${token}` } })
            .then((res) => {
                setOrder_id(res.data.data._id)
                alert(res.data.message)
            })
            .catch(err => console.error(err.response.data))
            .finally(() => {
                dispatch(setCart([]))
                localStorage.setItem('cart', JSON.stringify([]))
            })
                        
        }
        
        useEffect(() => {
            if (order_id) {
                navigate(`/invoice/${order_id}`)
            }
        }, [order_id])

    return (
        <div className="bg-gradient-to-tl from-amber-100 to-gray-100">


            <div className="grid lg:grid-cols-3 gap-2">
                {/* ADDRESS */}
                <div className="p-4 col-span-2">

                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Alamat Pengiriman
                    </h2>


                    <CheckboxAddress onChangeAddress={getDeliveryAddress} />

                    <div className="flex justify-between">
                        <a
                            href='cart'
                            className="rounded-md border border-transparent bg-amber-600 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-amber-700">
                            Sebelumnya
                        </a>
                        <button
                            onClick={handleChekout}
                            className="rounded-md border border-transparent bg-amber-600 px-4 py-1 text-base font-medium text-white shadow-sm hover:bg-amber-700">
                            Konfirmasi
                        </button>
                    </div>
                </div>

                {/* Summary orders */}
                <div className="hidden lg:flex border-t flex-col bg-white shadow-xl">
                    <img
                        className="mx-auto mt-3 h-auto w-32"
                        src="https://dapursolo.com/library/2022/10/200x60-dapur-solologofin-rgbprimary-logo-1665116236.png"
                        alt="Dapur Solo"
                    />
                    <h2 className="text-2xl p-2 text-center font-bold mb-3">Order Summary</h2>
                    {carts.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-white">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>Rp. {subtotal}</p>
                        </div>
                        <div className="flex justify-between border-b mb-4 text-base font-medium text-gray-900">
                            <p>Ongkir</p>
                            <p>Rp. {delivery_fee}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Total</p>
                            <p>Rp. {total}</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
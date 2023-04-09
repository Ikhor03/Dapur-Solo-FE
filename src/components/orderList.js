import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function OrderList() {
    const navigate = useNavigate()
    const [orders, setOrders] = useState()
    let { token } = JSON.parse(localStorage.getItem('auth'))

    useEffect(() => {
        async function getOrders() {
            let { data } = await axios(`http://localhost:3000/api/orders`, { headers: { Authorization: `Bearer ${token}` } })
            setOrders(data.data)
        }

        getOrders()
    }, [])

    return (
        <>{
            !orders || orders.length === 0 ?
                <div>
                    <p className="text-center font-semibold mb-2">ANDA BELUM MEMILIKI PEMESANAN</p>
                    <a href="home" className="grid text-center font-bold text-amber-600">Pesan sekarang &rarr;</a>
                </div>
                :
                <div className="bg-white px-1 rounded-md w-full">

                    <h2 className="text-gray-600 font-semibold">All Oders</h2>

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead >
                                    <tr >
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order ID
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Total
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Invoice
                                        </th>
                                    </tr>
                                </thead>
                                {orders.map((order) => (
                                    <tbody key={order._id}>
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap text-ellipsis truncate w-20 active:w-auto">
                                                    #{order._id}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    Rp. {order.order_items.reduce((acc, item) => acc + (item.price * item.quantity), 0) + order.delivery_fee}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-amber-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-amber-200 opacity-50 rounded-full"></span>
                                                    <span className="relative">{order.status}</span>
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <button
                                                    onClick={() => navigate(`/invoice/${order._id}`)}
                                                    className="p-1 rounded-lg text-gray-100 bg-amber-700 hover:bg-amber-800">
                                                    Invoice
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>

                    </div>
                </div>
        }</>

    )
}
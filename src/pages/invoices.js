import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { statusChanged } from "../app/features/invoice"

export default function Invoice() {
    const dispatch = useDispatch()
    let { token } = JSON.parse(localStorage.getItem('auth'))
    let { id } = useParams()
    const invoiceState = useSelector((state) => state.invoice)
    const invoiceLS = localStorage.getItem('invoice') ? JSON.parse(localStorage.getItem('invoice')) : {}
    const [dataInvoice, setDataInvoice] = useState(null)
    const endPoint = process.env.REACT_APP_END_POINT
    const [flag, setFlag] = useState(false)

    async function getInvoice() {
        let { data } = await axios(`${endPoint}/api/invoice/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        setDataInvoice(data)
    }

    const handleSuccess = () => {
        alert('Payment successfully')
        dispatch(statusChanged({ invoiceLS, id, status: "paid" }))
        setFlag(true)
    }

    const handleFailed = () => {
        alert('Payment failed')
        dispatch(statusChanged({ invoiceLS, id, status: "failed" }))
        setFlag(true)
    }

    useEffect(() => {
        if (flag) {
            localStorage.setItem('invoice', JSON.stringify(invoiceState))
        }
        getInvoice()
    }, [flag])


    return (
        <>
            {
                !dataInvoice ?
                    <div className="mt-44 grid">
                        <h2 className="text-center font-bold">LOADING...</h2> <br />
                        <a href="/home" className="text-center text-sm font-semibold text-amber-500">&larr; Back to home</a>
                    </div>
                    :
                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">Invoice</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">lorem ipsum Fugiat</p>
                        </div>
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{dataInvoice.status}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Order ID</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{id}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Rp. {dataInvoice.total}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Billed to</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <p className="font-bold">{dataInvoice.user.full_name}</p>
                                        <p>{dataInvoice.user.email}</p> <br />
                                        <p>{`
                                            ${dataInvoice.delivery_address.provinsi} ${dataInvoice.delivery_address.kabupaten} ${dataInvoice.delivery_address.kecamatan}
                                            ${dataInvoice.delivery_address.kelurahan} . ${dataInvoice.delivery_address.detail}
                                        `}</p>
                                    </dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Payment to</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <p>Sikamardi</p>
                                        <p>sika@mail.cun</p>
                                        <p>BCA</p>
                                        <p>xxx-xxxx-333-44</p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="grid grid-cols-3 my-16">
                            <a href="/home" className="col-span-2 ml-16 text-md font-semibold text-amber-500">&larr; Back to home</a>
                            <div className="flex justify-between">
                                <button
                                    onClick={handleSuccess}
                                    className="bg-green-500/50 w-1/3 mx-auto rounded-lg">Mark as Succees</button>
                                <button
                                    onClick={handleFailed}
                                    className="bg-red-500/60 w-1/3 mx-auto rounded-lg">Mark as failed</button>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

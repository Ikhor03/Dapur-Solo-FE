import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Invoice() {
    const [invoice, setInvoice] = useState()
    let { token } = JSON.parse(localStorage.getItem('auth'))
    let {id} = useParams()

    useEffect(() => {
        if(id){
            async function getInvoice() {
                let { data } = await axios(`http://localhost:3000/api/invoice/${id}`, { headers: { Authorization: `Bearer ${token}` } })
                setInvoice(data)
            }
            
            getInvoice()
        }

        
    }, [id])

    return (
        <>
            {
                !invoice ?
                    <div className="mt-44 grid">
                        <h2 className="text-center font-bold">LOADING...</h2> <br/>
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
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{invoice.payment_status}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Order ID</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{id}</dd>
                                </div>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Total Amount</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Rp. {invoice.total}</dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Billed to</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <p className="font-bold">{invoice.user.full_name}</p>
                                        <p>{invoice.user.email}</p> <br />
                                        <p>{`
                                            ${invoice.delivery_address.provinsi} ${invoice.delivery_address.kabupaten} ${invoice.delivery_address.kecamatan}
                                            ${invoice.delivery_address.kelurahan} . ${invoice.delivery_address.detail}
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
                        <div className="grid my-16">
                            <a href="/home" className="text-center text-md font-semibold text-amber-500">&larr; Back to home</a>
                        </div>
                    </div>
            }
        </>
    )
}

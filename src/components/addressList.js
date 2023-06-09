import axios from "axios";
import { useEffect, useState } from "react";
import getToken from "../utils/getToken";

export default function AddressList() {
    const [dataList, setDataList] = useState([])
    const endPoint = process.env.REACT_APP_END_POINT

    const token = getToken()

    const handleDelete = (e) => {
        let id = e.target.value
        async function deleteAddres() {
            try {
                let { data } = await axios.delete(`${endPoint}/api/addresses/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                if (data.error) {
                    console.log(data)
                } else {
                    alert(`alamat "${data.nama}" berhasil dihapus`)
                }

                window.location.reload()
            } catch (error) {
                console.error(error)
            }
        }

        deleteAddres()
    }

    useEffect(() => {
        async function getAddresses() {
            let { data } = await axios(`${endPoint}/api/addresses`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            setDataList(data.data)
        }

        getAddresses()
    }, [])

    return (
        <div className="bg-white py-1 rounded-md w-full">
            <div className=" flex items-center justify-between pb-6">
                <h2 className="text-gray-600 font-semibold">Shipping point</h2>

                <div className="flex items-center justify-between">
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <a
                            href='/address'
                            className="bg-amber-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                            Create
                        </a>
                    </div>
                </div>
            </div>

            {
                dataList.length === 0 ?
                    <div>
                        <h1 className="text-center font-semibold">ANDA BELUM MEMILIKI ALAMAT PENGIRIMAN</h1>
                    </div>

                    :

                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="table-auto min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 md:w-40 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Nama
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Detail
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 w-10">
                                        </th>
                                    </tr>
                                </thead>

                                {dataList.map((address) => (
                                    <tbody key={address._id}>
                                        <tr>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {address.nama}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {`${address.provinsi}, ${address.kabupaten}, ${address.kecamatan}, ${address.kelurahan}, ${address.detail} `}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <button
                                                    value={address._id}
                                                    onClick={handleDelete}
                                                    className="text-amber-900 hover:text-amber-800"
                                                >
                                                    delete
                                                </button>
                                                {/* <TrashIcon value={address._id} className="h-5 w-5 hover:text-white" /> */}
                                            </td>
                                        </tr>
                                        <tr>

                                        </tr>
                                    </tbody>
                                ))}

                            </table>
                        </div>

                    </div>
            }
        </div>
    )
}
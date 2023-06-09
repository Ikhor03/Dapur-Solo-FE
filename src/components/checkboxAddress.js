import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import getToken from '../utils/getToken'

export default function CheckboxAddress({ onChangeAddress }) {
    const token = getToken()
    const endPoint = process.env.REACT_APP_END_POINT
    const [dataList, setDataList] = useState([])
    const [selected, setSelected] = useState('')

    const handleChecked = (value) => {
        setSelected(value)
        let filtered = dataList.filter(data => data._id === value)
        onChangeAddress(filtered[0])
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
        <div className="w-full px-4 py-16">
            <p className="text-center mb-3">
                Pilih alamat pengiriman atau {' '}
                <a
                    href='/address'
                    className="text-amber-600 font-semibold cursor-pointer"
                >
                    tambahkan alamat
                </a>
            </p>
            <div className="mx-auto w-full max-w-xl">
                <RadioGroup value={selected} onChange={handleChecked}>
                    <RadioGroup.Label className="sr-only">Alamat Pengiriman</RadioGroup.Label>
                    <div className="space-y-2">
                        {dataList.map((address) => (
                            <RadioGroup.Option
                                key={address._id}
                                value={address._id}
                                className={({ active, checked }) =>
                                    `${active
                                        ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-500'
                                        : ''}
                                    ${checked ? 'bg-sky-800 bg-opacity-75 text-white' : 'bg-white'}
                                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                            }`}
                                                    >
                                                        {address.nama}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        <span>
                                                            {address.provinsi}/{address.kabupaten}/{address.kecamatan}/{address.kelurahan}
                                                        </span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{address.detail}</span>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}



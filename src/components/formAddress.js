import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function FormAddress () {
    const navigate = useNavigate()
    const [provinceList, setProvinceList] = useState([])
    const [regenciesList, setRegenciesList] = useState([])
    const [districtsList, setDistricstLis] = useState([])
    const [villagesList, setVillagesList] = useState([])

    const [nama, setNama] = useState('')
    const [detail, setDetail] = useState('')
    const [provinsi, setProvinsi] = useState('')
    const [kabupaten, setKabupaten] = useState('')
    const [kecamatan, setKecamatan] = useState('')
    const [kelurahan, setKelurahan] = useState('')

    const getZone = async (zone, ID) => {
        try {
            if (zone && ID) {
                return await axios(`http://www.emsifa.com/api-wilayah-indonesia/api/${zone}/${ID}.json`)
                // setProvinceList(response.data)

            } else if (zone) {
                return await axios(`http://www.emsifa.com/api-wilayah-indonesia/api/${zone}.json`)
                // setProvinceList(response.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleProv = (e) => {
        let id = e.target.value

        let value = provinceList.filter(val => val.id === id)
        setProvinsi(value[0].name)

        getZone('regencies', id)
            .then(res => setRegenciesList(res.data))
    }

    const handleRegency = (e) => {
        let id = e.target.value

        let value = regenciesList.filter(val => val.id === id)
        setKabupaten(value[0].name)

        getZone('districts', id)
            .then(res => setDistricstLis(res.data))
    }

    const handleDistrict = (e) => {
        let id = e.target.value

        let value = districtsList.filter(val => val.id === id)
        setKecamatan(value[0].name)

        getZone('villages', id)
            .then(res => setVillagesList(res.data))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {}

        try {
            let { data } = await axios.post(`http://localhost:3000/api/addresses`, {
                nama,
                detail,
                provinsi,
                kabupaten,
                kecamatan,
                kelurahan
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (data.error) {
                console.log(data.message);
            } else {
                alert(`alamat "${data.nama}" berhasil ditambahkan`)
                navigate(-1)
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getZone('provinces')
            .then(res => setProvinceList(res.data))
    }, [])
    return (
        <form onSubmit={handleSubmit}>
            <div>

                <div className="border-gray-900/10 pb-5">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Nama Alamat
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setNama(e.target.value)}
                                    required
                                    type="text"
                                    placeholder='Rumah ayang...'
                                    name="name"
                                    id="name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Detail alamat
                            </label>
                            <div className="mt-2">
                                <textarea
                                    onChange={(e) => setDetail(e.target.value)}
                                    required
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:py-1.5 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Tulis detail alamat atau patokan dengan jelas</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Provinsi
                            </label>
                            <div className="mt-2">
                                <select
                                    required
                                    onChange={handleProv}
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Pilih alamat..</option>

                                    {
                                        provinceList.map(prov => (
                                            <option key={prov.id} value={prov.id} >{prov.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Kabupaten
                            </label>
                            <div className="mt-2">
                                <select
                                    required
                                    onChange={handleRegency}
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Pilih alamat..</option>

                                    {
                                        regenciesList.map(regency => (
                                            <option key={regency.id} value={regency.id} >{regency.name}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Kecamatan
                            </label>
                            <div className="mt-2">
                                <select
                                    required
                                    onChange={handleDistrict}
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Pilih alamat..</option>

                                    {
                                        districtsList.map(dist => (
                                            <option key={dist.id} value={dist.id} >{dist.name}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Kelurahan
                            </label>
                            <div className="mt-2">
                                <select
                                    onChange={(e) => setKelurahan(e.target.value)}
                                    required
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                                >
                                    <option>Pilih alamat..</option>

                                    {
                                        villagesList.map(village => (
                                            <option key={village.id} value={village.name} >{village.name}</option>
                                        ))
                                    }

                                </select>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    onClick={() => { navigate(-1) }}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
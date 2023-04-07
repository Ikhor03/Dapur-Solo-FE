import FormAddress from "../components/formAddress";

export default function AddressForm() {
    

    return (
        <>

            <img
                className="mx-auto h-12 w-auto"
                src="https://dapursolo.com/library/2022/10/200x60-dapur-solologofin-rgbprimary-logo-1665116236.png"
                alt="Dapur Solo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Tambahkan alamat pengiriman
            </h2>

            <div className="mx-auto my-12 w-5/6">
                <FormAddress />
            </div>
        </>
    )
}

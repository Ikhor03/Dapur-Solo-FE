// const products = [ //FAKE DATA
//     {
//         id: 1,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },
//     {
//         id: 2,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },
//     {
//         id: 3,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },
//     {
//         id: 4,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },
//     {
//         id: 5,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },
//     {
//         id: 6,
//         name: 'Nasi Goreng Timbel',
//         href: '#',
//         image_url: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
//         imageAlt: "Front of men's Nasi Goreng Timbel in black.",
//         price: 'Rp 25.000',
//         category: 'Makanan',
//         tags: "Nasi"
//     },

//     // More products...
// ]
export default function Card({ product, category, tags, cartCount, onCartChange }) {

    const addToCart = () => {
        alert(`Telah menambahkan ${product.name} ke dalam keranjang`)
        onCartChange(cartCount + 1)
    }

    return (
        <div >
            <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full rounded-md group-hover:opacity-75 lg:aspect-none lg:h-60">
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="h-auto w-full object-cover object-center lg:h-auto lg:w-full"
                    />
                </div>
                <div className="mt-0 " >
                    <p className="text-sm font-medium text-center text-gray-900">
                        {product.name}
                    </p>
                    {/* INI UI CATEGORY DAN TAGS */}
                    {/* <p className="text-sm font-light text-center text-gray-700">
                        {category}
                    </p> */}
                    <p className="text-sm font-medium text-center text-gray-900">Rp. {product.price}</p>
                    {/* {tags.map(tag => (
                        <span className=" text-sm text-center text-gray-700 mr-3" >
                            {tag}
                        </span>
                    ))} */}
                </div>
                <div className="flex justify-center">
                    <button
                        className=" mt-5 px-2 py-1 cursor-pointer border border-amber-700 bg-amber-500 hover:bg-amber-600 rounded-full "
                        onClick={addToCart}>
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
    )
}
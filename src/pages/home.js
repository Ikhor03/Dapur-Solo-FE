import Navbar from "../components/navigation"

const products = [
    {
        id: 1,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Nasi Goreng Timbel',
        href: '#',
        imageSrc: 'https://dapursolo.com/library/2021/05/nasi-goreng--1621832324.png',
        imageAlt: "Front of men's Nasi Goreng Timbel in black.",
        price: 'Rp 25.000',
        color: 'Black',
    },

    // More products...
]

export default function Home() {
    const addToCart = () => {
        console.log('add to cart')
    }
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="border-b-2 md:flex py-16 items-center">
                        <h2 className=" basis-1/2 text-2xl lg:text-5xl mb-3 md:mb-0 tracking-tight text-gray-900">Selera Nusantara</h2>
                        <p className=" basis-1/2 text-md lg:text-2xl tracking-tight text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus vitae nunc tincidunt cursus vel a turpis. Ut facilisis hendrerit eros at ultricies. Curabitur sollicitudin malesuada velit, quis luctus risus consectetur vel. </p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-auto w-full object-cover object-center lg:h-auto lg:w-full"
                                    />
                                </div>
                                <div className="mt-0 justify-center" >
                                    <h3 className="text-sm text-center text-gray-700">
                                        <p>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </p>
                                    </h3>
                                    <p className="text-sm font-medium text-center text-gray-900">{product.price}</p>
                                    <h2 className="text-center pt-2 cursor-pointer" onClick={addToCart}>Add to cart</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

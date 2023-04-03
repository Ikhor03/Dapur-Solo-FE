import { useState } from "react"
import { CardList } from "../components/cardList"
import Footer from "../components/footer"
import Navbar from "../components/navigation"

export default function Home() {
    const [cartCount, setCartCount] = useState(0)

    return (
        <>
            <Navbar cartCount={cartCount} />
            <div className="bg-gray-100">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="border-b-2 md:flex py-16 items-center">
                        <h2 className=" basis-1/2 text-2xl lg:text-5xl mb-3 md:mb-0 tracking-tight text-gray-900">Selera Nusantara</h2>
                        <p className=" basis-1/2 text-md lg:text-2xl tracking-tight text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel metus vitae nunc tincidunt cursus vel a turpis. Ut facilisis hendrerit eros at ultricies. Curabitur sollicitudin malesuada velit, quis luctus risus consectetur vel. </p>
                    </div>

                    <CardList cartCount={cartCount} onCartChange={count => setCartCount(count)} />

                </div>
                <Footer />
            </div>
        </>
    )
}

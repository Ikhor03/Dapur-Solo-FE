import { CardList } from "../components/cardList"
import Footer from "../components/footer"
import Navbar from "../components/navigation"

export default function Home() {

    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="border-b-2 md:flex py-16 items-center">
                        <h2 className=" basis-1/2 text-2xl lg:text-5xl mb-3 md:mb-0 tracking-tight text-gray-900">Selera Nusantara</h2>
                        <div className="basis-1/2">
                            <p className="text-md lg:text-2xl tracking-tight text-gray-900">
                                Dengan visi melestarikan budaya Indonesia terutama makanan tradisional Jawa, kami berkomitmen untuk terus mengembangkan kualitas produk kami melalui pelayanan yang prima.
                            </p>
                        </div>
                    </div>

                    <CardList />

                </div>
                <Footer />
            </div>
        </>
    )
}

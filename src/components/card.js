import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../app/features/Cart/action"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import getToken from "../utils/getToken"

export default function Card({ product, category, tags }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const carts = useSelector((state) => state.carts.cart)
    const token = getToken()
    const endPoint = process.env.REACT_APP_END_POINT

    async function saveCart() {
        try {
            let { data } = await axios.put(`${endPoint}/api/cart`, { items: carts }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            alert(data.message)
        } catch (error) {
            console.error(error.response.data)
        }
    }

    const handleAddCart = () => {
        if (token) {
            dispatch(addToCart(product))
            saveCart()
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(carts))
    }, [carts])


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
                <div className="mt-0 lg:mt-5" >
                    <p className="text-sm font-medium text-center text-gray-900">
                        {product.name}
                    </p>
                    <p className="text-sm font-medium text-center text-gray-900">Rp. {product.price}</p>
                </div>
                <div className="flex justify-center">
                    <button
                        className="text-sm sm:text-base mt-5 px-2 py-1 cursor-pointer border border-amber-700 bg-amber-500 hover:bg-amber-600 rounded-full "
                        onClick={handleAddCart}>
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
    )
}
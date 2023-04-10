import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../app/features/Cart/action"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Card({ product, category, tags }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const carts = useSelector((state) => state.carts.cart)
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : ""

    async function saveCart() {
        try {
            let { data } = await axios.put('http://localhost:3000/api/cart', { items: carts }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            alert(data.message)
        } catch (error) {
            console.error(error.response.data)
        }
    }
    
    const handleAddCart = () => {
        if (token){
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
                        onClick={handleAddCart}>
                        Add to cart
                    </button>

                </div>
            </div>
        </div>
    )
}
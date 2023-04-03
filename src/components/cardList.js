import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectAllProducts, selectCategory, selectLimit, selectSkip, selectTags, } from "../app/features/Product/productsSlice"
import Card from "./card"
import Pagination from "./pagination"

export const CardList = ({cartCount, onCartChange}) => {

    const dispatch = useDispatch()
    const allProducts = useSelector(selectAllProducts)
    const productStatus = useSelector(state => state.products.status)
    const productError = useSelector(state => state.products.error)
    const skip = useSelector(selectSkip)
    const limit = useSelector(selectLimit)
    const category = useSelector(selectCategory)
    const tags = useSelector(selectTags)

    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        if (productStatus === 'pending') {
            dispatch(fetchProducts({ skip, limit, category, tags }))
        }
    }, [productStatus, dispatch, skip, limit, category, tags])

    if (productStatus === 'succeeded') {
        return (
            <>
                <div className="mt-6 mb-24 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        allProducts.data.map((product) => {
                            let category = ''
                            let tags = []
                            if (product.category) {
                                category = product.category
                            }
                            if (product.tags.length !== 0) {
                                product.tags.map(e => tags.push(e.name))
                            }

                            return (
                                <Card
                                    product={product}
                                    key={product._id}
                                    category={category.name}
                                    tags={tags}
                                    cartCount={cartCount}
                                    onCartChange={onCartChange}
                                />
                            )
                        })
                    }
                </div>
                <Pagination
                    products={allProducts}
                    currentPage={currentPage}
                    onPageChange={page => setCurrentPage(page)}
                    skip={skip}
                    limit={limit}
                    tags={tags}
                />
            </>
        )

    } else if (productStatus === 'failed') {
        return (
            <div>{productError}</div>
        )
    }

}
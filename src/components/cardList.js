import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts, selectAllProducts, selectCategory, selectLimit, selectSkip, selectTags, } from "../app/features/Product/productsSlice"
import Card from "./card"
import Pagination from "./pagination"

export const CardList = () => {

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
        dispatch(fetchProducts({ skip, limit, category, tags }))
    }, [skip, limit, category, tags])

    if (productStatus === 'succeeded') {
        return (
            <>
                <div className="grid grid-cols-3 border-b font-semibold p-4 sticky">
                    {
                        category && (
                            <div className="flex col-span-1 w-1/2">
                                <p > Kategori:</p>
                                <p className="px-1 mx-2 ring-1 ring-gray-500 rounded-md">{category}</p>
                            </div>
                        )
                    }
                    {
                        tags.length !== 0 && (
                            <div className="flex col-span-2">
                                <p > Tags:</p>
                                {tags.map((tag, i) => (<p key={i} className="px-1 mx-1 ring-1 ring-gray-500 rounded-md">{tag}</p>))}
                            </div>
                        )
                    }
                </div>
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
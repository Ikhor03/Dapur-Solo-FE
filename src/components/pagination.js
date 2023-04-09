import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addedSkip, fetchProducts, selectCategory, subtractedSkip } from '../app/features/Product/productsSlice'

export default function Pagination({ products, currentPage, onPageChange, skip, limit, tags }) {
    const dispatch = useDispatch()
    const category = useSelector(selectCategory)

    let totalPageCount = Math.ceil(products.count / limit)
    const DOTS = '...'

    const range = (start, end) => {
        let length = end - start + 1
        return Array.from({ length }, (_, idx) => idx + start)
    }

    const paginationRange = useMemo(() => {
        let totalRange = range(1, totalPageCount)

        if (totalPageCount <= 10) {
            return totalRange
        }

        let firstRange = totalRange.slice(0, 2)
        let lastRange = totalRange.slice(-2)

        return [...firstRange, DOTS, ...lastRange]

    }, [totalPageCount])

    const handlePrev = () => {
        onPageChange(currentPage - 1)
        dispatch(subtractedSkip())
        dispatch(fetchProducts({ skip: skip - limit, limit, category, tags }))
    }
    
    const handleNext = () => {
        onPageChange(currentPage + 1 )
        dispatch(addedSkip())
        dispatch(fetchProducts({ skip: skip + limit, limit, category, tags }))
    }

    return (
        <div className="flex relative items-center justify-between bg-transparent  sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className={
                        `disabled:opacity-75 relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50`
                        }
                >
                    Previous
                </button>
                {/* Count */}
                <div className='md:pl-20'>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{products.data.length}</span> of{' '}
                        <span className="font-medium">{products.count}</span> results
                    </p>
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPageCount}
                    className="disabled:opacity-75 relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
            <div className="hidden bg-transparent sm:flex sm:flex-1 sm:items-center sm:justify-between">
                {/* Count */}
                <div className='md:pl-20'>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{products.data.length}</span> of{' '}
                        <span className="font-medium">{products.count}</span> results
                    </p>
                </div>
                {/* Pagination */}
                <div className=''>
                    <nav className="isolate  inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                            className="disabled:bg-gray-200 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {paginationRange.map(pageNumber => (
                            <button
                                // onClick={onPageChange}
                                key={pageNumber}
                                className={
                                    pageNumber === currentPage ? ' relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 bg-amber-500 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'
                                        : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                                }
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPageCount}
                            className="disabled:bg-gray-200 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

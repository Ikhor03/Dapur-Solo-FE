import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import FilterBar from './filterBar'
import { useDispatch, useSelector } from 'react-redux'
import { openBar } from '../app/features/filterBar/filterBarSlice'

export default function Navbar() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState(false)
    const carts = useSelector((state) => state.carts.cart)
    const countCarts = carts.length

    const {token} = JSON.parse(localStorage.getItem('auth'))

    function closeSearchBar() {
        setSearch(false)
    }

    function openSearchBar() {
        setSearch(true)
    }

    return (
        <div className="fixed z-40 w-full bg-white">

            {/* SearchBar pop up */}
            <Transition appear show={search} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeSearchBar}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 py-4 text-center align-middle shadow-xl transition-all">
                                    <div className="flex">
                                        <input
                                            type="search"
                                            className="inline-flex justify-center w-full rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-600 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                                        />
                                        <button className='ml-3 border rounded-md w-32'
                                            onClick={closeSearchBar}
                                        >
                                            search
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <FilterBar />

            <header className="relative bg-white">

                <nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
                    <div className="border-b border-gray-200 ">
                        <div className="flex items-center h-24">
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 lg:hidden"
                                onClick={() => dispatch(openBar())}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            </button>

                            <div className=" flex items-center ">
                                {/* Flyout menus */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6">
                                    <span className="text-lg font-medium text-amber-600 hover:text-amber-700 cursor-pointer" onClick={() => dispatch(openBar())}>
                                        Filter
                                    </span>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                </div>

                                {/* Search */}
                                <div className="flex lg:ml-6" onClick={openSearchBar}>
                                    <span className="ml-0 text-gray-400 hover:text-gray-500">
                                        <span className="sr-only ">Search</span>
                                        <MagnifyingGlassIcon className="h-7 w-7" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>


                            {/* Logo */}
                            <div className="flex flex-1 items-center justify-center lg:space-x-6">
                                <a href="/">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        className="h-16 "
                                        src="https://dapursolo.com/library/2022/10/200x60-dapur-solologofin-rgbprimary-logo-1665116236.png"
                                        alt=""
                                    />
                                </a>
                            </div>


                            <div className="ml-auto flex items-center ">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <a href={token === null? '/login' : '/account'}
                                        className="text-lg font-medium text-amber-600 hover:text-amber-700"
                                    >
                                        Account
                                    </a>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                </div>

                                {/* Cart */}
                                <div className="ml-4 flow-root lg:ml-6">
                                    <a href="cart" className="group -m-2 flex items-center p-2">
                                        <ShoppingBagIcon
                                            className="h-7 w-7 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-lg font-medium text-gray-700 group-hover:text-gray-800">
                                            {countCarts}
                                        </span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState(false)

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

            {/* Daftar Menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 " onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs lg:max-w-md flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'border-amber-600 text-amber-600' : 'border-transparent text-gray-900',
                                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                    )
                                                }
                                            >
                                                Daftar Menu
                                            </Tab>
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        <Tab.Panel className="space-y-10 px-4 pt-10 pb-8">
                                            <div className="grid grid-cols-2 gap-x-4">
                                                {/* {category.featured.map((item) => ( */}
                                                <div className="group relative text-sm">
                                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/0f/50/9f/c5/nasi-pecel-madiun-healthy.jpg" alt="nasi-pecel-madiun-healthy" className="object-cover object-center" />
                                                    </div>
                                                    <a href="home" className="mt-6 block font-medium text-gray-900">
                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                        Paket Buka Spesial
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Pesan
                                                    </p>
                                                </div>
                                                <div className="group relative text-sm">
                                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                        <img src="https://dapursolo.com/library/2019/07/dapur-solo---09-11-1843113-3-1563768318.jpg" alt="nasi-pecel-madiun-healthy" className="object-cover object-center" />
                                                    </div>
                                                    <a href="home" className="mt-6 block font-medium text-gray-900">
                                                        <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                        Paket Nasi Kotak
                                                    </a>
                                                    <p aria-hidden="true" className="mt-1">
                                                        Pesan
                                                    </p>
                                                </div>
                                                {/* ))} */}
                                            </div>
                                            <div>
                                                <p id={`category.id-section.id-heading-mobile`} className="font-medium text-gray-900">
                                                    Categories
                                                </p>
                                                <ul
                                                    aria-labelledby={`{category.id}-{section.id}-heading-mobile`}
                                                    className="mt-6 flex flex-col space-y-6"
                                                >
                                                    <li className="flow-root">
                                                        <a href='{item.href}' className="-m-2 block p-2 text-gray-500">
                                                            Category
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    <div className="flow-root">
                                        <a href="/" className="-m-2 block p-2 font-medium text-gray-900">
                                            Sign in
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href="/" className="-m-2 block p-2 font-medium text-gray-900">
                                            Create account
                                        </a>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">

                <nav aria-label="Top" className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 ">
                    <div className="border-b border-gray-200 ">
                        <div className="flex items-center h-24">
                            <button
                                type="button"
                                className="rounded-md bg-white text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                            </button>

                            <div className=" flex items-center ">
                                {/* Flyout menus */}
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6">
                                    <span className="text-lg font-medium text-amber-600 hover:text-amber-700 cursor-pointer" onClick={() => setOpen(true)}>
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
                                    <a href="/"
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
                                        <span className="ml-2 text-lg font-medium text-gray-700 group-hover:text-gray-800">0</span>
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

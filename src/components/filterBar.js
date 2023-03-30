import { Dialog, Tab, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { close } from '../app/features/filterBar/reducerFilter'

const FilterBar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const openValue = useSelector(state => state.FilterBar.value)
    const dispatch = useDispatch()

    const closeBar = () => {
        dispatch(close())
    }

    return (
        <Transition.Root show={openValue} as={Fragment}>
            <Dialog as="div" className="relative z-40 " onClose={closeBar}>
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
                                    onClick={closeBar}
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
                                        {/* Categories */}
                                        <div>
                                            <p id={`category.id-section.id-heading-mobile`} className="font-medium text-lg text-gray-900">
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
                                        {/* Tags */}
                                        <div className='border-t'>
                                            <p id={`category.id-section.id-heading-mobile`} className="font-medium text-lg text-gray-900">
                                                Tags
                                            </p>
                                            <ul
                                                aria-labelledby={`{category.id}-{section.id}-heading-mobile`}
                                                className="mt-6 flex flex-col space-y-6"
                                            >
                                                <li>
                                                    <div >
                                                        <button className='bg-amber-500 hover:bg-amber-600 rounded-xl text-center p-2 text-sm'>Clear All</button>
                                                    </div>
                                                </li>
                                                <li >
                                                    <form className="grid grid-cols-2 text-lg accent-amber-400 ">
                                                        <div className=''>
                                                            <input type="checkbox" className='h-5 w-5 mr-2' id="tag id" name="tag id" value="Bike" />
                                                            <label for="tag id" > Nasi</label>
                                                        </div>
                                                        <div className=''>
                                                            <input type="checkbox" className='h-5 w-5 mr-2' id="tag id" name="tag id" value="Bike" />
                                                            <label for="tag id"> Camilan</label>
                                                        </div>
                                                        <div className=' mt-3'>
                                                            <input type="checkbox" className='h-5 w-5 mr-2' id="tag id" name="tag id" value="Bike" />
                                                            <label for="tag id"> tumpeng</label>
                                                        </div>
                                                    </form>
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
    )
}

export default FilterBar
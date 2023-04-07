import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, MapIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import OrderList from './orderList'
import AddressList from './addressList'

export default function DisclosureAcc() {
    return (
        <div className="w-full px-4 ">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                                <div className=" px-4 py-2 flex">
                                    <ShoppingBagIcon className="h-6 w-6 text-amber-700" />
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">
                                            Orders
                                        </p>
                                        <p className="text-xs text-gray-500">View your orders</p>
                                    </div>
                                </div>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-amber-700`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <OrderList />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75">
                                <div className="px-4 py-2 flex">
                                    <div className="text-gray-800">
                                        <MapIcon className='h-6 w-6 text-amber-700' />
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">Address</p>
                                        <p className="text-xs text-gray-500">View your address list</p>
                                    </div>
                                </div>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-amber-700`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <AddressList />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

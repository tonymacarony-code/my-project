'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import google from '../../../public/google.png'
import trustpilot from '../../../public/trustpilot.svg'
import heroImage from '../../../public/services/art.jpg'
const navigation = [
    { name: 'Services', href: '#' },
    { name: 'How it works', href: '#' },
    { name: 'Choose us', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'FAQ', href: '#' },
]

const stats = [
    { id: 1, name: 'TVs mounted', value: '1,000+' },
    { id: 2, name: 'Industry experience', value: '5+' },
    { id: 3, name: 'Job success rate', value: '99.9%' },
    { id: 4, name: 'Screws tightened and counting', value: '10,000+' },
]

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-100">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image src={logo} alt="Logo" width={150} height={150} />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-[15px] font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href={''}
                            className="rounded-md w-auto  text-center bg-cta px-8 py-2 text-base font-heading font-semibold text-white shadow-xs hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-focus"
                        >
                            Book now
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href={''}
                                        className="rounded-md w-auto  text-center bg-cta px-8 py-3 text-lg font-semibold text-white shadow-xs hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-focus"
                                    >
                                        Book now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
            <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
                {/* <div
                    aria-hidden="true"
                    className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
                /> */}
                <div className="mx-auto max-w-7xl px-6 pt-32 sm:pt-30  lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-30">
                        {/* Текст слева */}
                        <div className="flex-1">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-[64px]">
                                Smart service, built for modern homes
                            </h1>
                            <p className="mt-6 text-lg font-medium text-pretty text-gray-800 sm:text-lg/relaxed">
                                From TV mounting to furniture assembly — DrillWorks connects you with skilled professionals who make your home setup fast, safe, and stress-free.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href={''}
                                    className="rounded-md w-auto  text-center bg-cta px-8 py-3 text-lg font-heading font-semibold text-white shadow-xs hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-focus"
                                >
                                    Book now
                                </a>
                            </div>
                            <div className="mt-10 flex items-center gap-x-6">
                                <Image src={google} alt="Google Reviews" width={140} height={720} />
                                <Image src={trustpilot} alt="Trustpilot Reviews" width={140} height={72} />
                            </div>

                        </div>


                        <div className="flex-1">
                            <Image
                                alt="Hero Image"
                                width={500}
                                height={500}
                                src={heroImage}
                                className="w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5 aspect-square"
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:pb-20">
                    <div className="mx-auto max-w-2xl lg:max-w-none">

                        <dl className="mt-[92px] grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.id} className="flex items-start flex-col">
                                    <dt className="text-base font-regular text-gray-800">{stat.name}</dt>
                                    <dd className="order-first text-[56px] font-heading font-semibold  text-gray-900">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

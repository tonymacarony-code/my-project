'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { MapPinIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline'

// Динамический импорт компонента карты с отключением SSR
const MapContent = dynamic(() => import('./MapContent'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">Загрузка карты...</p>
        </div>
    ),
})

export default function Map() {
    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                            Service Area
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            We proudly serve Los Angeles area — from Santa Monica to Pasadena, from Downtown to the Valley.
                            Wherever you are, we’re already nearby, ready to drill, mount, and get it done right.                        </p>
                        <dl className="mt-10 space-y-6 text-base/7 text-gray-600">
                            <div>
                                <dt className="flex items-center gap-x-3 font-semibold text-gray-900">
                                    <MapPinIcon aria-hidden="true" className="h-6 w-6 text-indigo-600" />
                                    Coverage Area
                                </dt>
                                <dd className="mt-2 ml-9">
                                    Santa Monica • Hollywood • Downtown LA • Pasadena • Burbank • Glendale • and all surrounding neighborhoods.
                                </dd>
                            </div>
                            <div>
                                <dt className="flex items-center gap-x-3 font-semibold text-gray-900">
                                    <ClockIcon aria-hidden="true" className="h-6 w-6 text-indigo-600" />
                                    Response Time
                                </dt>
                                <dd className="mt-2 ml-9">
                                    Same-day service available for most locations
                                </dd>
                            </div>
                            <div>
                                <dt className="flex items-center gap-x-3 font-semibold text-gray-900">
                                    <CalendarIcon aria-hidden="true" className="h-6 w-6 text-indigo-600" />
                                    Availability
                                </dt>
                                <dd className="mt-2 ml-9">
                                    9am - 10pm • Monday - Sunday
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="relative lg:static">
                    <MapContent />
                </div>
            </div>
        </div>
    )
}

import Image, { StaticImageData } from "next/image";
import calendar from '../../../public/icons/calendar.png'
import clean from '../../../public/icons/clean.png'
import like from '../../../public/icons/like.png'
import sameday from '../../../public/icons/sameday.png'
import transparent from '../../../public/icons/transparent.png'
import quality from '../../../public/icons/quality.png'
import crystal from '../../../public/icons/crystal.png'
import handshake from '../../../public/icons/handshake.png'
import message from '../../../public/icons/message.png'

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Perfect results, every time',
        description:
            'Every job ends only one way — perfectly. If something’s not right, we fix it on the spot. Your satisfaction isn’t a promise — it’s our rule.',
        icon: crystal,
    },
    {
        name: 'Need it fast? We’re already on our way',
        description:
            'Book today — get help today or tomorrow. No endless waiting, no stress.',
        icon: sameday,
    },
    {
        name: 'Book in 60 seconds',
        description:
            'A few taps and you’re set. Flexible times, zero back-and-forth. It’s booking made effortless.',
        icon: calendar,
    },
    {
        name: 'Know the price before we start',
        description:
            'No surprises, no hidden fees. What you see is what you pay — clear, fair, and upfront. Trust built from transparency.',
        icon: transparent,
    }, {
        name: 'We treat your home like our own',
        description:
            'Shoe covers, clean workspace, spotless finish. We leave your place looking better than when we arrived.',
        icon: clean,
    },
    {
        name: 'Stay in the loop, always',
        description:
            'Quick replies, clear updates, and friendly check-ins. You’ll always know what’s happening — before you even ask.',
        icon: message,
    },

]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="">
                    <h2 className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        The DrillWorks difference
                    </h2>
                    <dl className="mt-20 col-span-3 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.icon.src} className="bg-gray-100 rounded-[20px] p-7">
                                <div>
                                    <dt className="text-base/7 font-semibold text-gray-900 b">
                                        <div className="mb-6 flex size-18 items-center justify-center rounded-lg ">
                                            <Image src={feature.icon as StaticImageData} alt={feature.name} width={200} height={200} />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 text-base/7 text-gray-600">{feature.description}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

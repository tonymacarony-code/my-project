import Image, { StaticImageData } from "next/image";
import calendar from '../../../public/icons/calendar.png'
import clean from '../../../public/icons/clean.png'
import like from '../../../public/icons/like.png'
import sameday from '../../../public/icons/sameday.png'
import transparent from '../../../public/icons/transparent.png'
import quality from '../../../public/icons/quality.png'
import crystal from '../../../public/icons/crystal.png'
import shield from '../../../public/icons/shield.png'
import message from '../../../public/icons/message.png'

import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: "Perfect results. Every time.",
        description:
            "We finish every project to the highest standard. If anything isn’t right, we make it right on the spot. Excellence isn’t a goal — it’s our baseline.",
        icon: crystal,
    },
    {
        name: "Fast service when you need it",
        description:
            "Book today and get service today or tomorrow. No long waits. No uncertainty. Just quick, reliable help when it matters.",
        icon: sameday,
    },
    {
        name: "Professionals you can rely on",
        description:
            "All experts are vetted, trained, and trusted. You always get a qualified, safe, and dependable professional in your home.",
        icon: shield,
    },
    {
        name: "Booking that takes seconds",
        description:
            "Choose a time, confirm, done. No calls, no back-and-forth. Just a smooth, modern booking experience.",
        icon: calendar,
    },
    {
        name: "Upfront pricing, zero surprises",
        description:
            "Transparent rates and clear estimates. What you see is exactly what you pay — always fair and always upfront.",
        icon: transparent,
    },
    {
        name: "Your home treated with care",
        description:
            "Shoe covers on, workspace protected, everything cleaned before we leave. Respect for your home is part of the job.",
        icon: clean,
    },
];


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
                                    <dt className="text-lg font-semibold text-gray-900 b">
                                        <div className="mb-6 flex size-18 items-center justify-center rounded-lg ">
                                            <Image src={feature.icon as StaticImageData} alt={feature.name} width={200} height={200} />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-1 text-base/7 text-gray-800">{feature.description}</dd>
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

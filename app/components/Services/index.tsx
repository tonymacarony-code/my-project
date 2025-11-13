
import { FaTv } from "react-icons/fa6";
import { LuDrill } from "react-icons/lu";
import { MdOutlineChair } from "react-icons/md";
import Image from 'next/image';
import Star from "@/public/Star";
import clsx from "clsx";
import art from '../../../public/services/art.jpg'
import tv from '../../../public/services/mountedTV.jpg'
import fa from '../../../public/services/fa.webp'
const features = [
    {
        name: 'TV Mounting',
        description:
            'Clean, secure, and perfectly leveled',
        href: '#',
        icon: FaTv,
        services: [
            'All TV sizes & mount types',
            'Works with drywall, brick & concrete',
            'Hidden cord solutions & cable management',
            'Precise leveling and secure installation',
        ],
        image: tv,
    },
    {
        name: 'General Mounting',
        description:
            'Keeping everything straight, stable, and exactly where you want it',
        href: '#',
        icon: LuDrill,
        services: [
            'Art, mirrors & wall decor',
            'Curtains, blinds & shades',
            'Floating shelves & bookcases',
            'Custom layouts & balanced spacing',
        ],
        image: art,
    },
    {
        name: 'Furniture Assembly',
        description:
            'Quick and flawless furniture assembly for any brand and type',
        href: '#',
        icon: MdOutlineChair,
        services: [
            'All furniture brands & types',
            'Beds, dressers, tables, chairs & more',
            'Professional, fast, and clean assembly',
            'Optional wall anchoring for safety',
        ],
        image: fa,
    },
]


export default function Services() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Our services
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-1">
                        {features.map((feature, index) => (
                            <div key={feature.name} className="flex w-full gap-6">

                                <div className={clsx("w-1/2 rounded-3xl flex flex-col  justify-center items-center bg-[#f6f6f6] p-6", index % 2 !== 0 && "order-1")} >
                                    <div className="w-[450px]">
                                        <dt className="text-5xl font-semibold tracking-tight font-heading text-gray-900">
                                            {feature.name}
                                        </dt>

                                        <dd className="mt-1 flex flex-col text-base/7 text-gray-600">
                                            <p>{feature.description}</p>

                                        </dd>
                                        <dl>
                                            <ul className="mt-6 space-y-2">
                                                {feature.services.map((service) => (
                                                    <li key={service} className="flex items-center gap-2 text-gray-600">
                                                        <Star />
                                                        <span>{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </dl>
                                        <p className="mt-12">
                                            <a
                                                href={feature.href}
                                                className="rounded-md w-auto  text-center bg-cta px-8 py-3 text-lg font-semibold text-white shadow-xs hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-focus"
                                            >
                                                Book now
                                            </a>
                                        </p>
                                    </div >
                                </div>
                                <div className="w-1/2 rounded-3xl overflow-hidden">
                                    <Image src={feature.image} alt={feature.name} className="w-full h-full object-cover" width={600} height={600} />
                                </div>
                            </div>
                        ))}
                    </dl>
                </div>
            </div >
        </div >
    )
}

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What types of jobs do you handle?",
        answer:
            "We cover a wide range of handyman services — from TV mounting and furniture assembly to shelving, wall décor, and minor repairs.",
    },
    {
        question: "Can you mount a TV above a fireplace?",
        answer:
            "Yes. We safely mount TVs over fireplaces, ensuring proper height, cable concealment, and protection from heat.",
    },
    {
        question: "Can you mount on metal studs, brick, or plaster walls?",
        answer:
            "Absolutely. We use specialized anchors and hardware designed for each wall type — drywall, metal studs, brick, plaster, or concrete.",
    },
    {
        question: "Do you help with smart TV setup?",
        answer:
            "Yes, we can connect your devices, set up Wi-Fi, streaming apps, and optimize picture settings if needed.",
    },
    {
        question: "Can you dismount and remount a TV after moving?",
        answer:
            "Of course. We handle dismounting, moving, and remounting to make your relocation or remodel seamless.",
    },
    {
        question: "Can you secure furniture to the wall for safety?",
        answer:
            "Yes, we anchor tall items like wardrobes, bookshelves, and dressers to prevent tipping — ideal for homes with kids or pets.",
    },
    {
        question: "Do you help decide the best placement?",
        answer:
            "Yes, we assist with choosing the ideal height, alignment, and positioning to fit your room layout and style.",
    },
    {
        question: "How do I book a service?",
        answer:
            "You can book directly through our website, text, or call us — we’ll confirm your time and send a professional to your location.",
    },
    {
        question: "Do you charge for quotes?",
        answer:
            "No. All estimates are free and transparent — you’ll always know the total cost before we start.",
    },
    {
        question: "Can I combine multiple tasks in one visit?",
        answer:
            "Absolutely. Many clients book mixed jobs — like TV mounting, shelf installation, and furniture assembly — in one appointment.",
    },
];

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="">
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-16 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
                                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
                                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                                    <p className="text-base/7 text-gray-800">{faq.answer}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

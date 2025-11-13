import Image from 'next/image'

function StarRating() {
    return (
        <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

const featuredTestimonial = {
    body: 'Added Anton to my favorites list! He was fantastic. Anton communicates well, was on time, came with all the right tools and is super strong. He took down my heavy Flatscreen TV without any assistance. He was so quick and offered to patch the holes. 10 Star! I will be hiring Anton in a few weeks to setup my TV and Restoration Hardware Canopy bed when I move to my new place. If you\'re looking for a competent reliable handyman, Anton is it!',
    author: {
        name: 'Kristina K.',
        imageUrl:
            'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
    },
}
const testimonials = [
    [
        [
            {
                body: 'Anton did such a fantastic job mounting 2 TVs and assembling my furniture. He was on time and did the job promptly. He was a very polite and pleasant conversationalist. Will definitely book again.',
                author: {
                    name: 'Julia J.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
            {
                body: 'Anton is professional and did an amazing job! He had a back up mount which saved us because turns out the movers didn\'t pack ours Mount with our tv. Anton patched all spots perfect and our tv looks great! I\'d 100% recommend Anton and we would definitely hire him again!',
                author: {
                    name: 'Ali D.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
            {
                body: 'Anton did a great job walk mounting my TV. He had great communication and arrived a little early which was very welcome. He was quick, careful, and considerate. He handled the TV with care and made sure everything was set up to my liking before leaving. I\'d definitely recommend him.',
                author: {
                    name: 'Alex R.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
        ],
        [
            {
                body: 'Professional and clearly communicated what to expect or provided great recommendation before completing the work. Quiet, calm, and gets it done in no time. Thank you Anton.',
                author: {
                    name: 'Monique B.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
            {
                body: 'Absolutely fantastic! He was very communicative and explained his process as he went along, which made me even more comfortable. He was precise, professional and extremely considerate.',
                author: {
                    name: 'Andrea B.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1524763397/ammgnz4dormsofkbitfv.jpg',
                },
            },
        ],
    ],
    [
        [
            {
                body: 'Anton showed up early and went right to work. He was very efficient and the job took about 35 min. Very nice guy as well. Definitely hire Anton! Very nice guy and hardworking.',
                author: {
                    name: 'Melinda B.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
            {
                body: 'Anton was great! Worked fast and did an amazing job. He got the job done very quickly and efficiently. I would definitely recommend for anyone wanting to mount a tv to the wall! He is a pro!',
                author: {
                    name: 'Madison D.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
        ],
        [
            {
                body: 'Great job on mounting 4 TVs, one of which was already mounted and needed to be relocated to a different room. Cleaned up after himself, great work on measuring and making sure we liked the location of each tv. His attention to detail is amazing!',
                author: {
                    name: 'Donita G.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1655508481/gcszmzfjrd8nlxfbnjke.jpg',
                },
            },
            {
                body: 'Anton was amazing! Best tasker I\'ve ever used! He was thoughtful and polite and professional and really knew what he was talking about. He was also very patient with me while I was deciding how I wanting things and changing my mind. Will use him again!',
                author: {
                    name: 'Ava P.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1475695998/ns1dma2zcin4psx7fia6.jpg',
                },
            },
            {
                body: 'Amazing service! Anton arrived right on time, worked quickly, and did an excellent job mounting my TV. Everything is clean, secure, and looks perfect. He was professional and detail-oriented. Highly recommend!',
                author: {
                    name: 'Daria B.',
                    imageUrl:
                        'https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_528,w_528/v1608683191/default_avatar.png',
                },
            },
        ],
    ],
]

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
                />
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        We have worked with thousands of amazing people
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                            <StarRating />
                            <p className="mt-4">{`"${featuredTestimonial.body}"`}</p>
                        </blockquote>
                        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                            <Image
                                alt={featuredTestimonial.author.name}
                                src={featuredTestimonial.author.imageUrl}
                                width={40}
                                height={40}
                                className="size-10 flex-none rounded-full bg-gray-50"
                            />
                            <div className="flex-auto">
                                <div className="font-semibold text-gray-900">{featuredTestimonial.author.name}</div>
                            </div>
                        </figcaption>
                    </figure>
                    {testimonials.map((columnGroup, columnGroupIdx) => (
                        <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                            {columnGroup.map((column, columnIdx) => (
                                <div
                                    key={columnIdx}
                                    className={classNames(
                                        (columnGroupIdx === 0 && columnIdx === 0) ||
                                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                            ? 'xl:row-span-2'
                                            : 'xl:row-start-1',
                                        'space-y-8',
                                    )}
                                >
                                    {column.map((testimonial, idx) => (
                                        <figure
                                            key={`${testimonial.author.name}-${idx}`}
                                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                        >
                                            <blockquote className="text-gray-900">
                                                <StarRating />
                                                <p className="mt-4">{`"${testimonial.body}"`}</p>
                                            </blockquote>
                                            <figcaption className="mt-6 flex items-center gap-x-4">
                                                <Image
                                                    alt={testimonial.author.name}
                                                    src={testimonial.author.imageUrl}
                                                    width={40}
                                                    height={40}
                                                    className="size-10 rounded-full bg-gray-50"
                                                />
                                                <div>
                                                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'

const galleryImages = [
    {
        id: 1,
        src: '/gallery/1.jpeg',
        alt: 'TV Mounting Installation',
        span: 'row-span-2',
    },
    {
        id: 2,
        src: '/gallery/2.jpeg',
        alt: 'Art Installation',
        span: 'row-span-1',
    },
    {
        id: 3,
        src: '/gallery/4.jpeg',
        alt: 'Furniture Assembly',
        span: 'row-span-2',
    },
    {
        id: 4,
        src: '/gallery/5.jpeg',
        alt: 'Service Calendar',
        span: 'row-span-1',
    },
    {
        id: 5,
        src: '/gallery/6.jpeg',
        alt: 'Premium Service',
        span: 'row-span-2',
    },
    {
        id: 6,
        src: '/gallery/7.jpeg',
        alt: 'Quality Check',
        span: 'row-span-2',
    },
    {
        id: 7,
        src: '/gallery/8.jpeg',
        alt: 'Professional Installation',
        span: 'row-span-1',
    },
    {
        id: 8,
        src: '/gallery/11.jpeg',
        alt: 'Same Day Service',
        span: 'row-span-2',
    }, {
        id: 9,
        src: '/gallery/12.jpeg',
        alt: 'Premium Service',
        span: 'row-span-2',
    },
    {
        id: 10,
        src: '/gallery/13.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 11,
        src: '/gallery/14.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 12,
        src: '/gallery/15.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 13,
        src: '/gallery/16.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 14,
        src: '/gallery/17.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 15,
        src: '/gallery/18.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    }, {
        id: 16,
        src: '/gallery/20.jpeg',
        alt: 'Quality Check',
        span: 'row-span-1',
    },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
                    <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Our Work Gallery
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Explore our completed projects and see the quality of our craftsmanship
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`
                                group relative overflow-hidden rounded-2xl cursor-pointer
                                transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                                ${image.span}
                                ${index % 5 === 0 ? 'lg:col-span-2' : ''}
                            `}
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-white font-semibold text-lg">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-4 border-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-cta transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
                            <Image
                                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


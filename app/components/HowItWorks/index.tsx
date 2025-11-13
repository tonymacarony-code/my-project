import Image from 'next/image'
import howItWorks from '../../../public/preview.png'

const features = [
    {
        name: 'Choose your service',
        description:
            'Select the type of job you need — TV mounting, furniture assembly, or general home help',
    },
    {
        name: 'Get an instant estimate',
        description: 'Enter your address, pick a time that works for you, and see your price upfront',
    },
    {
        name: 'Book your time',
        description: 'A trusted professional arrives on time and gets the job done',
    },
]

export default function HowItWorks() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                How it works
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Our simple, three-step process makes hiring a handyman easy and stress-free
                            </p>
                            <dl className="mt-10 max-w-xl space-y-4 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature, index) => (
                                    <div key={feature.name} className="bg-gray-100 rounded-3xl p-6 pt-14 relative">
                                        <div className="absolute top-4 left-6 text-heading text-xl font-bold">
                                            {index + 1}
                                        </div>
                                        <div className="text-heading text-2xl font-bold">
                                            {feature.name}
                                        </div>
                                        {feature.description}
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        alt="How it works"
                        src={howItWorks}
                        width={2432}
                        height={1442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}

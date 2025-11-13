export default function CTA() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Ready to get started?
                    <br />
                    Book your service today
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
                    <a
                        href="#"
                        className="rounded-md w-auto text-center bg-cta px-8 py-3 text-lg  text-white shadow-xs hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-focus"
                    >
                        Book now
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:opacity-80">
                        Contact us
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function Newsletter() {
    return (
        <div className="py-16 sm:py-24">
            <div className="relative sm:py-16 overflow-x-hidden">
                <div aria-hidden="true" className="hidden sm:block">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 bg-opacity-10 rounded-r-3xl" />
                    <svg
                        className="absolute top-8 left-1/2 -ml-3"
                        width={404}
                        height={392}
                        fill="none"
                        viewBox="0 0 404 392"
                    >
                        <defs>
                            <pattern
                                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={392}
                            fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
                        />
                    </svg>
                </div>
                <div className="mx-auto px-4 sm:max-w-3xl lg:max-w-7xl">
                    <div className="relative rounded-2xl px-6 py-10 bg-amber-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                        >
                            <svg
                                className="absolute inset-0 h-full w-full"
                                preserveAspectRatio="xMidYMid slice"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 1463 360"
                            >
                                <path
                                    className="text-amber-500 text-opacity-40"
                                    fill="currentColor"
                                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                                />
                                <path
                                    className="text-amber-700 text-opacity-40"
                                    fill="currentColor"
                                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                />
                            </svg>
                        </div>
                        <div className="relative">
                            <div className="sm:text-center">
                                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                                    Stay in the loop!
                                </h2>
                                <p className="mt-6 mx-auto max-w-2xl text-lg text-amber-200">
                                    Join our mailing list and get notified
                                    everytime there&rsquo;s a new report.
                                </p>
                            </div>
                            <form
                                onSubmit={event => event.preventDefault()}
                                className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                            >
                                <div className="min-w-0 flex-1">
                                    <label
                                        htmlFor="cta_email"
                                        className="sr-only"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        id="cta_email"
                                        type="email"
                                        className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-amber-500 text-base font-medium text-white shadow hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-600 sm:px-10"
                                    >
                                        Keep me Updated
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

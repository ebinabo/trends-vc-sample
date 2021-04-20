import results from "../data/results"

export default function Results() {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="mt-8 grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                {results.map(result => (
                    <div
                        key={result.label}
                        className="bg-gray-dark h-40 rounded-md px-4 py-3 flex flex-col justify-between items-start"
                    >
                        <div>
                            <p className="text-2xl text-gray-100 font-semibold">
                                {result.label}
                            </p>
                            <div className="divide-x divide-gray-600 -mx-2">
                                {result.tags.map(tag => (
                                    <span
                                        className="px-2 uppercase font-bold tracking-wide text-xs text-gray-600"
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md">
                            Get Report
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8 grid sm:justify-center">
                <button className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md w-full sm:w-auto mx-auto">
                    View More
                </button>
            </div>
        </div>
    )
}

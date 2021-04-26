export default function Results({ records, selected }) {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="mt-8 grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                {selected
                    ? records
                          .filter(record => record.Tags.includes(selected))
                          .map(record => (
                              <Record key={record.id} record={record} />
                          ))
                    : records.map(record => (
                          <Record key={record.id} record={record} />
                      ))}
            </div>

            {/* <div className="mt-8 grid sm:justify-center">
                <button className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md w-full sm:w-auto mx-auto">
                    View More
                </button>
            </div> */}
        </div>
    )
}

function Record({ record }) {
    return (
        <div
            key={record.Topic}
            className="bg-gray-dark rounded-md px-4 py-3 flex flex-col justify-between items-start"
        >
            <div>
                <p className="text-2xl text-gray-100 font-semibold">
                    {record.Topic}
                </p>
                <div className="divide-x divide-gray-600 flex flex-wrap mt-1.5">
                    {record.Tags.map((tag, index) => (
                        <span
                            className={`${
                                index === 0 ? "pl-0" : "pl-2"
                            } pr-2 uppercase font-bold tracking-wide text-xs text-gray-600`}
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-12 mb-3 space-x-2">
                <a
                    href={record.Link}
                    target="_blank"
                    className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md"
                >
                    Get Report
                </a>
                <a
                    href="/"
                    target="_blank"
                    className="text-white text-opacity-60 hover:underline"
                >
                    Preview Report
                </a>
            </div>
        </div>
    )
}

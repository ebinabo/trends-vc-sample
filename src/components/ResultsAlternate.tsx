import { useEffect, useState } from "react"
import results from "../data/results"

export default function Results() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/get-data").then(res =>
            res.json().then(data => setData(data))
        )
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="mt-8 grid gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                {data.length ? (
                    data.map(record => (
                        <Record key={record.id} record={record} />
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>

            <div className="mt-8 grid sm:justify-center">
                <button className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md w-full sm:w-auto mx-auto">
                    View More
                </button>
            </div>
        </div>
    )
}

function Record({ record }) {
    return (
        <div
            key={record.Topic}
            className="bg-gray-dark h-40 rounded-md px-4 py-3 flex flex-col justify-between items-start"
        >
            <div>
                <p className="text-2xl text-gray-100 font-semibold">
                    {record.Topic}
                </p>
                <div className="divide-x divide-gray-600 -mx-2">
                    {record.Tags.map(tag => (
                        <span
                            className="px-2 uppercase font-bold tracking-wide text-xs text-gray-600"
                            key={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <a
                href={record.Link}
                target="_blank"
                className="bg-gray-mid bg-opacity-30 hover:bg-opacity-75 text-gray-100 px-4 py-2 rounded-md"
            >
                Get Report
            </a>
        </div>
    )
}

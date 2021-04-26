import { SearchIcon } from "@heroicons/react/outline"
import { Dispatch, SetStateAction } from "react"
import categories from "../data/categories"

export default function Filter({
    state,
}: {
    state: [string, Dispatch<SetStateAction<string>>]
}) {
    const [selected, setSelected] = state

    return (
        <div className="max-w-7xl mx-auto px-4">
            {/* CONSIDER REMOVING PARENT DIV AND STYLING */}
            <div className="flex flex-col md:flex-row items-baseline md:space-x-8 space-y-4 md:space-y-0">
                <div className="flex-grow w-full">
                    <label
                        htmlFor="search"
                        className="block text-sm font-medium text-gray-100"
                    >
                        Search
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </div>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-transparent text-gray-400"
                            placeholder="Type here to search..."
                        />
                    </div>
                </div>
            </div>

            <div className="flex overflow-scroll md:overflow-hidden md:justify-center space-x-4 md:flex-wrap">
                {categories.map(category => (
                    <button
                        key={category.label}
                        onClick={() => setSelected(category.label)}
                        className={`flex flex-shrink-0 items-center text-white md:text-sm border mt-4 mb-4 md:mb-0 px-4 py-2 md:px-2.5 md:py-0.5 rounded-full focus:outline-none ${
                            selected === category.label ? "bg-amber-500" : ""
                        }`}
                    >
                        <category.icon className=" w-6 h-6 md:w-4 md:h-4 mr-2" />
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

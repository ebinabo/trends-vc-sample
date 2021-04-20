import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SearchIcon, SelectorIcon } from "@heroicons/react/outline"
import { Fragment, useState } from "react"
import categories from "../data/categories"

export default function Filter() {
    const [selected, setSelected] = useState(categories[0])

    return (
        <div className="max-w-7xl mx-auto px-4">
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
                            className="focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md bg-none text-gray-400"
                            placeholder="Type here to search"
                        />
                    </div>
                </div>

                <div className="w-full md:w-72">
                    <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                            <>
                                <Listbox.Label className="block text-sm font-medium text-gray-100">
                                    Categories
                                </Listbox.Label>
                                <div className="mt-1 relative">
                                    <Listbox.Button
                                        className="relative w-full py-2 px-4 flex justify-between bg-none rounded-lg shadow-md border border-gray-300 focus:outline-none
                                        cursor-default focus:ring-amber-500 focus:border-amber-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 sm:text-sm"
                                    >
                                        <div className="flex items-center space-x-2 text-gray-400">
                                            <span>
                                                <selected.icon className="w-5 h-5" />
                                            </span>
                                            <span>{selected.label}</span>
                                        </div>
                                        <span>
                                            <SelectorIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options
                                            static
                                            className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-600 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                        >
                                            {categories.map(category => (
                                                <Listbox.Option
                                                    value={category}
                                                    key={category.label}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                                                            <div
                                                                className={`${
                                                                    active
                                                                        ? "bg-gray-400"
                                                                        : ""
                                                                } flex items-center justify-between px-4 py-2`}
                                                            >
                                                                <div className="flex space-x-2">
                                                                    <span>
                                                                        <category.icon className="w-5 h-5" />
                                                                    </span>
                                                                    <span>
                                                                        {
                                                                            category.label
                                                                        }
                                                                    </span>
                                                                </div>
                                                                {selected ? (
                                                                    <CheckIcon className="w-5 h-5" />
                                                                ) : null}
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </div>
        </div>
    )
}

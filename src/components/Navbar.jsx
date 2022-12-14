import { useState } from "react"

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 justify-between items-center">
                <a href="https://flowbite.com" className="flex items-center">
                    {/* <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    /> */}
                    <span className="self-center text-4xl font-extrabold whitespace-nowrap dark:text-white">
                        devang.
                    </span>
                </a>
                <button
                    data-collapse-toggle="mega-menu-full"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    id="mega-menu-full"
                    className="hidden md:flex md:w-auto md:order-1"
                >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
                        <li>
                            <label class="switch">
                                <input type="checkbox" />
                            </label>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-lg font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <button
                                id="mega-menu-full-dropdown-button"
                                data-collapse-toggle="mega-menu-full-dropdown"
                                className="flex text-lg font-bold justify-between items-center py-2 pr-4 pl-3 w-full text-gray-700 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Drop-down{" "}
                                <svg
                                    className="ml-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-lg font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Lorem.
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-lg font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Lorem.
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-lg font-bold py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Lorem.
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                id="mega-menu-full-dropdown"
                className="hidden mt-1 bg-gray-50 border-gray-200 shadow-sm md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
            >
                <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Online Stores</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Segmentation</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <div className="font-semibold">Marketing CRM</div>
                                <span className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Connect with third-party tools that you're already using.
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
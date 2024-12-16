import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function BackButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-500"
        >
            <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6" aria-hidden="true" />
            <span className="hidden md:block text-xs md:text-sm lg:text-base font-semibold ml-2">Back</span>
        </button>
    );
}

export default BackButton;
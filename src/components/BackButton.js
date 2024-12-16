import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function BackButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute top-6 left-6 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-500 flex items-center"
        >
            <ArrowLeftIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 mr-2" aria-hidden="true" />
            <span className="text-xs md:text-sm lg:text-base font-semibold">Back</span>
        </button>
    );
}

export default BackButton;
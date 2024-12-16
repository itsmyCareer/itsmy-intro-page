import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
    return (
        <button
            onClick={toggleDarkMode}
            className="fixed top-6 right-6 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-500"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
            )}
        </button>
    );
}

export default DarkModeToggle;
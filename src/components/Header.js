import React from "react";
import BackButton from "./BackButton";
import DarkModeToggle from "./DarkModeToggle";

function Header({ buttonsState, setButtonsState, isDarkMode, toggleDarkMode }) {
    return (
        <div className="w-full flex items-center justify-between px-6 py-4 fixed top-2 left-0 bg-transparent z-20">
            <div className="flex items-center">
                {buttonsState !== "initial" && <BackButton onClick={() => setButtonsState("initial")} />}
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">Planetary</h1>
            </div>
            <div className="flex items-center">
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>
        </div>
    );
}

export default Header;
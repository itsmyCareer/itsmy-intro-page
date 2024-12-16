import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header";
import ButtonGroup from "./components/ButtonGroup";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [buttonsState, setButtonsState] = useState("initial");

    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    const handleButtonEvent = (message, link, mailto) => {
        if (mailto) {
            window.location.href = `mailto:${mailto}`;
        } else if (link) {
            window.open(link, "_blank");
        } else {
            toast(message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                transition: Slide,
                toastClassName: `text-sm md:text-base lg:text-lg ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } font-noto shadow-lg rounded-lg`,
                bodyClassName: "font-noto text-center",
            });
        }
    };

    return (
        <div
            className={`${isDarkMode ? "dark" : ""} h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative`}
        >
            <ParticleBackground isDarkMode={isDarkMode} />
            <Header
                buttonsState={buttonsState}
                setButtonsState={setButtonsState}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <div className="flex-grow flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <ButtonGroup
                        buttonsState={buttonsState}
                        setButtonsState={setButtonsState}
                        handleButtonEvent={handleButtonEvent}
                    />
                </AnimatePresence>
            </div>
            <ToastContainer
                closeButton={false}
                toastStyle={{
                    backgroundColor: isDarkMode ? "#2d3748" : "#f7fafc",
                    color: isDarkMode ? "#ffffff" : "#1a202c",
                }}
            />
        </div>
    );
}

export default App;
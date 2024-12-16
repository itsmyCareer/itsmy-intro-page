import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";
import ParticleBackground from "./components/ParticleBackground";
import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";
import ButtonGroup from "./components/ButtonGroup";
import BackButton from "./components/BackButton";

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
        if (mailto){
            window.location.href = `mailto:${mailto}`;
        }
        else if (link) {
            // 링크가 있으면 새 탭에서 열기
            window.open(link, "_blank");
        } else {
            // 링크가 없으면 Toast 표시
            toast(message, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true, // X 버튼 제거
                closeOnClick: true,
                draggable: true,
                transition: Slide, // 슬라이드 애니메이션
                toastClassName: `text-sm md:text-base lg:text-lg ${
                    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                } font-noto shadow-lg rounded-lg`,
                bodyClassName: "font-noto text-center",
            });
        }
    };

    return (
        <div
            className={`${isDarkMode ? "dark" : ""} min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500 relative`}
        >
            {/* Particle Background */}
            <ParticleBackground isDarkMode={isDarkMode} />

            {/* 상단 제목 */}
            <Header />

            {/* 뒤로가기 버튼 */}
            {buttonsState !== "initial" && (
                <BackButton onClick={() => setButtonsState("initial")} />
            )}

            {/* 버튼 그룹 */}
            <div className="z-10">
                <AnimatePresence mode="wait">
                    <ButtonGroup
                        buttonsState={buttonsState}
                        setButtonsState={setButtonsState}
                        handleButtonEvent={handleButtonEvent} // 이벤트 전달
                    />
                </AnimatePresence>
            </div>

            {/* 다크모드 전환 버튼 */}
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* Toast Container */}
            <ToastContainer
                closeButton={false} // X 버튼 완전히 제거
                toastStyle={{
                    backgroundColor: isDarkMode ? "#2d3748" : "#f7fafc",
                    color: isDarkMode ? "#ffffff" : "#1a202c",
                }}
            />
        </div>
    );
}

export default App;
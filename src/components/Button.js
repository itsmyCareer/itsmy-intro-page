import React from "react";
import { motion } from "framer-motion";

function Button({ onClick, icon: Icon, text, size }) {
    const sizes = {
        large: "w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64",
        small: "w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56",
    };

    const iconSizes = {
        large: "h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16",
        small: "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12",
    };

    const textSizes = {
        large: "text-xs md:text-sm lg:text-lg",
        small: "text-xs md:text-sm lg:text-lg",
    };

    return (
        <motion.button
            onClick={onClick}
            className={`bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-center items-center ${sizes[size]}`}
        >
            <Icon className={`${iconSizes[size]} text-gray-800 dark:text-white mb-4`} />
            <p className={`${textSizes[size]} text-gray-600 dark:text-gray-300 text-center`}>
                {text}
            </p>
        </motion.button>
    );
}

export default Button;
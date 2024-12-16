import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import {
    IdentificationIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

function ButtonGroup({ buttonsState, setButtonsState, handleButtonEvent }) {
    const buttonVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const transitionSettings = { duration: 1.0, ease: "easeInOut" };

    const initialButtons = [
        { icon: IdentificationIcon, text: "Work", size: "large", onClick: () => setButtonsState("work") },
        { icon: EnvelopeIcon, text: "Contact", size: "large", onClick: () => setButtonsState("contact") },
    ];

    const workButtons = [
        { icon: SiNotion, text: "Notion", size: "small", link: "https://itismy.notion.site/On-the-Grind-79bc344b00784246aab102297e6944d5" },
        { icon: FaGithub, text: "Github", size: "small", link: "https://github.com/itsmyCareer" },
        { icon: ChatBubbleOvalLeftEllipsisIcon, text: "Communication", size: "small", link: null},
        { icon: GlobeAltIcon, text: "Blog", size: "small", link: "https://blog.itsmyplanetary.me" },
    ];

    const contactButtons = [
        { icon: DevicePhoneMobileIcon, text: "Phone", size: "small", link: null, mailto: null },
        { icon: EnvelopeIcon, text: "E-mail", size: "small", link: null, mailto: "itsntmysurport@hotmail.com" },
        { icon: FaInstagram, text: "Instagram", size: "small", link: "https://www.instagram.com/tdayis2sday?igsh=eWkzODh2YzRuczRv&utm_source=qr", mailto: null },
        { icon: ChatBubbleOvalLeftEllipsisIcon, text: "Kakaotalk", size: "small", link: "https://open.kakao.com/me/itsmyplanetary", mailto: null },
    ];

    return (
        <>
            {buttonsState === "initial" && (
                <motion.div
                    key="initial-buttons"
                    className="grid grid-cols-2 sm:grid-cols-2 gap-16 md:gap-32 lg:gap-40 items-center justify-center"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={transitionSettings}
                >
                    <>
                    {initialButtons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={button.onClick}
                            icon={button.icon}
                            text={button.text}
                            size={button.size}
                        />
                    ))}
                    </>
                </motion.div>
            )}

            {buttonsState === "work" && (
                <motion.div
                    key="work-buttons"
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 gap-16 md:gap-24 lg:gap-32 items-center justify-center"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={transitionSettings}
                >
                    <>
                    {workButtons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() =>
                                handleButtonEvent(
                                    button.link ? null : "준비 중입니다!",
                                    button.link,
                                    null
                                )
                            }
                            icon={button.icon}
                            text={button.text}
                            size={button.size}
                        />
                    ))}
                    </>
                </motion.div>
            )}

            {buttonsState === "contact" && (
                <motion.div
                    key="contact-buttons"
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-12 gap-16 md:gap-24 lg:gap-32 items-center justify-center"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={transitionSettings}
                >
                    <>
                    {contactButtons.map((button, index) => (
                        <Button
                            key={index}
                            onClick={() =>
                                handleButtonEvent(
                                    button.link ? null : "준비 중입니다!",
                                    button.link,
                                    button.mailto
                                )
                            }
                            icon={button.icon}
                            text={button.text}
                            size={button.size}
                        />
                    ))}
                    </>
                </motion.div>
            )}

        </>
    );
}

export default ButtonGroup;
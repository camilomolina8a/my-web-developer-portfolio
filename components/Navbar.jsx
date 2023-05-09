import Image from "next/image";
import { useState } from "react";

import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <nav className="flex lg:mt-4 px-5 md:px-0 md:mx-auto md:h-[45px] justify-between items-center text-white w-[100%] md:w-[95%] lg:max-w-[1140px] lg:py-8">
            <div>
                <h2 className="text-3xl text-white font-poppins">Camilo</h2>
            </div>

            <ul className="hidden md:flex justify-between  h-full ">
                {navLinks.map((navlink, index) => (
                    <li
                        className={`relative text-lg px-[12px] flex items-center font-poppins font-medium border-bottom ${
                            index === navLinks.length - 1 ? "mr-0" : "mr-5"
                        }`}
                        key={navlink.id}
                    >
                        <a href={`#${navlink.id}`}>{navlink.title}</a>
                    </li>
                ))}
            </ul>

            {/*  //!Reemplazar la imagen de descarga por mi CV */}

            <a
                download="My CV"
                href="images/cv.jpg"
                className={`md:flex hidden btn btn-gradient h-[43px] text-base font-poppins`}
            >
                <span>Resume</span>

                <span className="ml-2">
                    <Image
                        src="/images/download-icon.png"
                        height="12px"
                        width="12px"
                        alt="Download icon"
                    />
                </span>
            </a>

            {/* ------------ Mobile and tablet menu ------------ */}

            <div
                className={`block md:hidden w-[28px] h-[28px] ${
                    !toggle ? "relative mt-[3px] left-[5px]" : "mt-0"
                }`}
            >
                {toggle ? (
                    <Image
                        src="/images/menu.svg"
                        height="28px"
                        width="28px"
                        alt="menu-icon"
                        onClick={() => setToggle(!toggle)}
                    />
                ) : (
                    <Image
                        src="/images/close.svg"
                        height="24px"
                        width="24px"
                        alt="menu-icon"
                        onClick={() => setToggle(!toggle)}
                    />
                )}
            </div>

            <div
                className={` ${
                    toggle
                        ? "-translate-x-full menu-transition flex flex-col items-center justify-center"
                        : "translate-x-0 menu-transition flex flex-col items-center justify-center"
                } md:hidden absolute w-[70%] top-[38px] left-0 h-[calc(100%-38px)] bg-emerald-800`}
            >
                <ul className="flex flex-col items-center justify-evenly border-[1px] w-full h-[90%]">
                    {navLinks.map((navlink, index) => (
                        <li
                            key={navlink.id}
                            className="w-full flex justify-center text-3xl z-[999] mb-4 tracking-wide"
                            onClick={() => setToggle(!toggle)}
                        >
                            <a href={`#${navlink.id}`}>{navlink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

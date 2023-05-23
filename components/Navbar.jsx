import Image from "next/image";
import { useState } from "react";

import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <nav
            className="flex lg:mt-4 px-5 py-5 md:px-0 md:mx-auto md:h-[45px] justify-between items-center text-white w-[100%] md:w-[95%] lg:max-w-[1140px] md:py-8 "
            id="home"
        >
            <div className="hidden md:block">
                <h2 className="font-rubik lg:text-[25px] font-[600] prevent-select">
                    CAMILO
                </h2>
            </div>
            <div className="hidden md:flex lg:justify-center">
                <ul className="hidden md:flex justify-between  h-full ">
                    {navLinks.map((navlink, index) => (
                        <li
                            className={`relative lg:text-lg px-[12px] flex items-center font-poppins font-medium border-bottom ${
                                index === navLinks.length - 1 ? "mr-0" : "mr-5"
                            }`}
                            key={navlink.id}
                        >
                            <a href={`#${navlink.id}`}>{navlink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/*  //!Reemplazar la imagen de descarga por mi CV */}

            <div className=" lg:w-[12%] lg:flex lg:justify-end">
                <a
                    download="My CV"
                    href="images/cv.jpg"
                    className={`md:flex hidden btn btn-gradient h-[43px] text-base font-poppins `}
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
            </div>

            {/* ------------ Mobile and tablet menu ------------ */}

            <div
                className={`block md:hidden w-[28px] h-[28px]${
                    !toggle ? "relative mt-[3px] left-[5px]" : "mt-0"
                }`}
            >
                <Image
                    src="/images/menu.svg"
                    height="28px"
                    width="28px"
                    alt="menu-icon"
                    onClick={() => setToggle(!toggle)}
                    className="z-[99] "
                />
            </div>

            <div
                className={` ${
                    toggle
                        ? "-translate-x-full menu-transition flex flex-col items-center justify-end "
                        : "translate-x-0 menu-transition flex flex-col items-center justify-end"
                } md:hidden fixed w-full top-0 left-0 h-full bg-[var(--bg-body)] z-[99] `}
            >
                <div className="absolute top-8 right-8">
                    <Image
                        src="/images/close.svg"
                        height="24px"
                        width="24px"
                        alt="menu-icon"
                        onClick={() => setToggle(!toggle)}
                        className="z-[999]"
                    />
                </div>
                <div className="flex flex-col items-center justify-end h-[25%] border-b border-b-gray-500 w-3/4 pb-3">
                    <h3 className=" font-rubik text-[3.8rem] logo">Camilo</h3>
                    <p className="font-rubik text-[1.3rem]">Web Developer</p>
                </div>

                <ul className="flex flex-col items-center justify-evenly w-full h-[75%]">
                    {navLinks.map((navlink, index) => (
                        <li
                            key={navlink.id}
                            className="w-full flex justify-center text-[35px] z-[99] mb-4 tracking-wide"
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

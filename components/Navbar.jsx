import Image from "next/image";
import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [changeNavbar, setChangeNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < 100) {
                setChangeNavbar(false);
            } else {
                setChangeNavbar(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header
            className={`${
                changeNavbar ? "bg-[#10051de7] " : "bg-none"
            }  md:mt-0 ease-in duration-300 flex  h-[66px] md:h-[66px]  max-w-[100%] fixed top-0 right-0 left-0 z-[99]`}
        >
            <nav className=" flex px-5 md:mt-0 md:px-0 md:mx-auto h-[66px] md:h-[45px] justify-between items-center text-white w-[100%] md:w-[95%] lg:max-w-[1140px] md:py-8 ">
                <div className="hidden md:block md:mt-1">
                    <h2 className="nav-logo font-rubik lg:text-[25px] font-[600] prevent-select">
                        CAMILO
                    </h2>
                </div>

                <div className="hidden md:flex lg:justify-center">
                    <ul className="hidden md:flex justify-between h-full ">
                        {navLinks.map((navlink, index) => (
                            <li
                                className={`relative lg:text-[1.2rem] px-[12px] flex items-center font-rubik font-medium border-bottom ${
                                    index === navLinks.length - 1
                                        ? "mr-0"
                                        : "mr-5"
                                }`}
                                key={navlink.id}
                            >
                                <a href={`#${navlink.id}`}>{navlink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-[40%] md:w-[18%] lg:w-[12%] lg:flex lg:justify-end ">
                    <a
                        download="CV_Camilo_Molina.pdf"
                        href="/images/CV_Camilo Molina_eng.pdf"
                        className={`md:flex hidden btn btn-gradient md:h-[43px] h-[38px] w-[125px] md:w-auto text-[14px] md:text-[1rem] font-rubik `}
                    >
                        <span>Resume</span>

                        <span className="ml-[4px] md:ml-2 md:h-auto">
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
                    className={`flex md:hidden w-[28px] h-[28px]${
                        !toggle ? "relative" : "mt-0"
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
                            ? "-translate-x-full menu-transition flex flex-col items-center justify-center "
                            : "  translate-x-0 menu-transition flex flex-col items-center justify-center"
                    } md:hidden fixed w-full top-0 left-0 h-full bg-[var(--bg-body)] z-[99]`}
                >
                    <div className="absolute top-6 right-5">
                        <Image
                            src="/images/close.svg"
                            height="24px"
                            width="24px"
                            alt="menu-icon"
                            onClick={() => setToggle(!toggle)}
                            className="z-[999]"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center h-[25%] border-b border-b-gray-500 w-[55%] pb-2">
                        <h3 className=" font-rubik text-[4rem] logo">Camilo</h3>
                        <p className="font-rubik text-[1.3rem]">
                            Web Developer
                        </p>
                    </div>

                    <ul className="flex flex-col items-center justify-evenly w-full h-[70%]">
                        {navLinks.map((navlink, index) => (
                            <li
                                key={navlink.id}
                                className="w-full flex justify-center text-[32px] font-rubik z-[99] tracking-wide"
                                onClick={() => setToggle(!toggle)}
                            >
                                <a href={`#${navlink.id}`}>{navlink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

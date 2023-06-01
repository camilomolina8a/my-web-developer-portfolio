import Image from "next/image";

import { toggleRubberBand } from "../helpers/toggleRubberBand";

import radientCircle from "../public/images/gradient-circle.svg";

const Hero = () => {
    return (
        <div className=" px-5 md:px-5 lg:px-0 lg:max-w-[1140px] lg:h-[calc(100vh-66px)] m-auto mt-[80px]">
            <h1 className=" text-[3rem] lg:text-[6rem] text-white  leading-0 md:leading-[6.8rem] font-rubik font-[700] prevent-select ">
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    H
                </span>
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    e
                </span>
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    l
                </span>
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    l
                </span>
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    o
                </span>
                <span
                    className="text-[2rem] md:text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    ,
                </span>
                <br />
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    I
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    &apos;
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                ></span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    m
                </span>
                &nbsp;
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    C
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    a
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    m
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    i
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    l
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    o
                </span>
                <span
                    className="letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    ,
                </span>
            </h1>

            <div className="flex flex-col text-[1.5rem] md:text-[2rem] text-green font-rubik h-[60px]">
                <p className="item z-[-1]">Front End Developer</p>
                <p className="item z-[-1]">React Native Developer</p>
                <p className="item z-[-1]">Wordpress Developer</p>
            </div>

            <p className="text-gray-400 text-[1rem] md:text-[1.1rem] font-rubik font-[300] max-w-[320px] md:max-w-[500px] mt-[-5px] md:mt-[-4px]">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
            </p>

            <a
                href="#contact"
                className="btn btn-gradient text-white mt-6 w-[140px] h-[45px] md:h-auto md:w-[160px] font-rubik text-[1rem] z-[-1]"
            >
                <span>Contact me</span>
            </a>

            <div className="circles-container">
                <div className=" relative h-[250px] w-[250px] lg:h-[400px] lg:w-[400px]  ">
                    <Image
                        src={radientCircle}
                        alt="gradient circle"
                        layout="fill"
                        className="gradient-circle one"
                    />
                </div>
                <div className="relative h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] ">
                    <Image
                        src={radientCircle}
                        alt="gradient circle"
                        layout="fill"
                        className="gradient-circle two"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

import { toggleRubberBand } from "../helpers/toggleRubberBand";

const Hero = () => {

    return (
        <div className=" px-5 md:px-0 lg:max-w-[1140px] md:h-[calc(100vh-66px)] m-auto mt-5 lg:mt-0">
            <h1 className=" text-[4rem] lg:text-[6rem] text-white  leading-0 md:leading-[6.8rem] font-rubik font-[700] prevent-select ">
                <span
                    className="text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    H
                </span>
                <span
                    className="text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    e
                </span>
                <span
                    className="text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    l
                </span>
                <span
                    className="text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    l
                </span>
                <span
                    className="text-[2.2rem] letter"
                    onMouseEnter={(e) => toggleRubberBand(e)}
                >
                    o
                </span>
                <span
                    className="text-[2.2rem] letter"
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

            <div className="flex flex-col text-[1.5rem] text-green font-rubik  h-[60px]">
                <p className="item">Front End Developer</p>
                <p className="item">React Native Developer</p>
                <p className="item">Wordpress Developer</p>
            </div>

            <p className="text-gray-400 text-[1rem] font-rubik font-[300] lg:max-w-[450px] mt-[-5px] md:mt-2">
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
            </p>

            <a
                href="#"
                className="btn btn-gradient mt-6 w-[160px] text-[1.125rem] font-[600]"
            >
                <span className="mt-[-4px]">Contact me</span>
            </a>

            <div className="rn-gradient circle-1"></div>
            <div className="rn-gradient circle-2"></div>

        </div>
    );
};

export default Hero;

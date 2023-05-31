import TextSphere from "./elements/TextSphere";
import { toggleRubberBand } from "../helpers/toggleRubberBand";

import Divider from "../components/elements/Divider";

function About() {
    return (
        <>
            <div
                className="w-full max-w-full lg:max-w-[1140px] mx-auto mt-[120px] md:mt-[150px] lg:mt-0 px-5 py-5 lg:py-0 lg:px-0"
                id="about"
            >
                <div className="w-full lg:h-[90vh] flex flex-col-reverse lg:flex-row">
                    <div className="flex items-center w-full lg:w-1/2 mt-8 lg:mt-0 text-[1.1rem] ">
                        <TextSphere />
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center flex-col items-start ">
                        <h2 className="lg:text-[5.5rem] text-[4rem] text-white font-rubik font-[700] prevent-select flex">
                            <br />
                            <span
                                className="letter "
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            >
                                A
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            ></span>
                            <span
                                className="letter"
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            >
                                b
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
                                u
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            >
                                t
                            </span>
                            &nbsp;
                            <span
                                className="letter"
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            >
                                M
                            </span>
                            <span
                                className="letter"
                                onMouseEnter={(e) => toggleRubberBand(e)}
                            >
                                e
                            </span>
                        </h2>

                        <p className="font-rubik font-[300] text-[1.1rem] text-gray-400 prevent-select">
                            I&apos;m a Freelancer Front-end Developer with over
                            3 years of experience. I&apos;m from San Francisco.
                            I code and create web elements for amazing people
                            around the world. I like work with new people. New
                            people new Experiences.
                        </p>

                        <br />

                        <p className="font-rubik font-[300] text-[1.1rem] text-gray-400 prevent-select">
                            I&apos;m a Freelancer Front-end Developer with over
                            3 years of experience. I&apos;m from San Francisco.
                            I code and create web elements for amazing people
                            around the world. I like work with new people. New
                            people new Experiences.
                        </p>

                        <br />

                        <p className="font-rubik font-[300] text-[1.1rem] text-gray-400 prevent-select">
                            Interested in the entire frontend spectrum and
                            working on ambitious projects with positive people
                        </p>

                        <br />

                        <a
                            className="font-rubik font-[300] cursor-pointer link text-[1.1rem] prevent-select"
                            href="#contact"
                        >
                            Let&apos;s make something special!!!
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-[60px] md:mt-[90px] mb-[50px] md:mb-[50px] lg:mb-0">
                <Divider />
            </div>
        </>
    );
}

export default About;

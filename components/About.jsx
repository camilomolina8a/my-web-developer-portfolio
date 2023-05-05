import TextSphere from "../elements/TextSphere";
import { toggleRubberBand } from "../helpers/toggleRubberBand";

function About() {
    return (
        <div className="max-w-[1140px] mx-auto">
            <div className=" w-full h-[90vh] flex">
                <div className="flex items-center lg:w-1/2">
                    <TextSphere />
                </div>
                <div className="lg:w-1/2 flex justify-center flex-col items-start">
                    <h2 className="text-[4rem] text-white font-rubik font-[700] prevent-select flex">
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
                        I&apos;m a Freelancer Front-end Developer with over 3
                        years of experience. I&apos;m from San Francisco. I code
                        and create web elements for amazing people around the
                        world. I like work with new people. New people new
                        Experiences.
                    </p>
                    <br />
                    <p className="font-rubik font-[300] text-[1.1rem] text-gray-400 prevent-select">
                        I&apos;m a Freelancer Front-end Developer with over 3
                        years of experience. I&apos;m from San Francisco. I code
                        and create web elements for amazing people around the
                        world. I like work with new people. New people new
                        Experiences.
                    </p>
                    <br />

                    <p className="font-rubik font-[300] text-[1.1rem] text-gray-400 prevent-select">
                        Interested in the entire frontend spectrum and working
                        on ambitious projects with positive people
                    </p>
                    <br />
                    <a className="font-rubik font-[300] cursor-pointer link text-[1.1rem] prevent-select ">
                        Let&apos;s make something special!!!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;

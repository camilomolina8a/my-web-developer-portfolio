import dynamic from "next/dynamic";
import { useState } from "react";

import ProjectCard from "./elements/ProjectCard";
import { toggleRubberBand } from "../helpers/toggleRubberBand";
import Divider from "./elements/Divider";

import { projects } from "../constants/projects";

const DynamicImportPopUpCard = dynamic(
    () => import("../components/elements/PopUpCard"),
    {
        ssr: false,
        // loading: () => <p>I am fetching</p>,
    }
);

function Projects() {
    const [toggle, setToggle] = useState(false);
    const [currentFullImages, setCurrentFullImages] = useState("");
    const [currentWebsiteURL, setCurrentWebsiteURL] = useState("");

    return (
        <>
            <div className="flex flex-col items-center w-full lg:max-w-[1140px] lg:mx-auto mb-[130px] px-5 lg:px-0 ">
                <h2
                    data-aos="fade-down"
                    className=" text-[4rem] lg:text-[5.5rem] text-white font-rubik font-[700] prevent-select flex mb-3 lg:mt-[40px] lg:pt-[40px] mt-[40px] "
                    id="portfolio"
                >
                    <br />

                    <span
                        className="letter"
                        onMouseEnter={(e) => toggleRubberBand(e)}
                    >
                        P
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
                        r
                    </span>
                    <span
                        className="letter"
                        onMouseEnter={(e) => toggleRubberBand(e)}
                    >
                        t
                    </span>
                    <span
                        className="letter"
                        onMouseEnter={(e) => toggleRubberBand(e)}
                    >
                        f
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
                        l
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
                        o
                    </span>
                </h2>

                <h3
                    data-aos="fade-down"
                    className="text-white mx-auto font-rubik text-[1.4rem] mb-5 font-[600]"
                >
                    My Latest Projects
                </h3>

                <div className=" flex justify-between md:justify-center md:gap-5 w-full flex-wrap">
                    {projects.length > 0 &&
                        projects.map((project, index) => {
                            const delay = (index + 1) * 100;
                            return (
                                <div
                                    key={project.id}
                                    data-aos="fade-up"
                                    data-aos-delay={delay}
                                    className="flex flex-col w-full md:w-[48%] lg:w-[32%] mb-5 md:mb-0 p-5 project-card rounded-[20px]"
                                >
                                    <ProjectCard
                                        setToggle={setToggle}
                                        thumbnail={project.thumbnail}
                                        sizeThumbnail={project.sizeThumbnail}
                                        backgroundColor={
                                            project.bgColorThumbnail
                                        }
                                        fullImages={project.fullImages}
                                        websiteURL={project.websiteURL}
                                        setCurrentFullImages={
                                            setCurrentFullImages
                                        }
                                        setCurrentWebsiteURL={
                                            setCurrentWebsiteURL
                                        }
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>

            {toggle && (
                <DynamicImportPopUpCard
                    toggle={toggle}
                    setToggle={setToggle}
                    fullImages={currentFullImages}
                    website={currentWebsiteURL}
                />
            )}

            <div
                data-aos="zoom-in"
                className="mt-[-20px] md:mt-[100px] lg:mt-[150px] mb-[70px] md:my-[90px] lg:mb-[80px]"
            >
                <Divider />
            </div>
        </>
    );
}

export default Projects;

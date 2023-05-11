import ProjectCard from "./elements/ProjectCard";
import { toggleRubberBand } from "../helpers/toggleRubberBand";

import { projects }  from "../constants/projects";


function Projects() {
    return (
        <div className="flex flex-col  w-full lg:max-w-[1140px] m-auto mb-[130px]">
            <h2 className="text-[5.5rem] text-white font-rubik font-[700] prevent-select flex mb-3 mt-[80px]">
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
            <h3 className="text-white mx-auto font-rubik text-[1.4rem] mb-5 font-[600]">
                My Latest Projects
            </h3>
            <div className=" flex justify-between w-full flex-wrap">
                 
                {projects.length > 0 &&
                    projects.map((project) => {
                        return (
                            <ProjectCard
                                key={project.id}
                                thumbnail={project.thumbnail}
                                sizeThumbnail ={project.sizeThumbnail}
                                backgroundColor={project.bgColorThumbnail}
                                
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default Projects;

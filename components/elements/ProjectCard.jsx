import React from "react";
import Image from "next/image";

function ProjectCard() {
    return (
        <div className="flex flex-col w-[32%]  p-5 project-card rounded-[20px]">
            <img
                alt=""
                src="https://picsum.photos/400/300"
                width={400}
                height={300}
                className="rounded-[20px] mb-6"
            />
            <button className="mx-auto btn font-rubik font-[600] w-[90%]">
                View more
                <span className="ml-[5px] pt-[2px] flex items-center">
                    <Image
                        src="/images/right-arrow.png"
                        height="20px"
                        width="20px"
                        alt="menu-icon"
                        className="right-arrow"
                    />
                </span>
            </button>
        </div>
    );
}

export default ProjectCard;

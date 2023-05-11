import React from "react";
import Image from "next/image";

function ProjectCard({
    id,
    thumbnail,
    sizeThumbnail,
    backgroundColor,
    fullImages,
    websiteURL,
}) {
    console.log(sizeThumbnail[0]);

    return (
        <div className="flex flex-col w-full md:w-[32%] mb-5 p-5 project-card rounded-[20px]">
            <div
                className={`flex items-center justify-center w-full h-[220px] mb-5 rounded-[20px]`}
                style={{ backgroundColor: `${backgroundColor}` }}
            >
                <span className={`relative`}>
                    <Image
                        src={thumbnail}
                        alt="business logo"
                        height={sizeThumbnail[0]}
                        width={sizeThumbnail[1]}
                        className="thumbnail object-contain"
                    />
                </span>
            </div>

            <button className="mx-auto btn font-rubik font-[600] w-[90%]">
                View more
                <span className="ml-[5px] pt-[2px] flex items-center ">
                    <Image
                        src="/images/right-arrow.png"
                        height="15px"
                        width="16px"
                        alt="menu-icon"
                        className="right-arrow"
                    />
                </span>
            </button>
        </div>
    );
}

export default ProjectCard;

function PopUp() {
    return (
        <div>
            <h1>Pop Up</h1>
        </div>
    );
}

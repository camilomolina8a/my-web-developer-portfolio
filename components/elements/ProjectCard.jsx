import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicImportPopUpCard = dynamic(() => import("../elements/PopUpCard"), {
    ssr: false,
    // loading: () => <p>I am fetching</p>,
});

function ProjectCard({
    id,
    thumbnail,
    sizeThumbnail,
    backgroundColor,
    fullImages,
    websiteURL,
}) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
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

            <button
                className="mx-auto btn font-rubik font-[600] w-[90%]"
                onClick={() => setToggle((prev) => !prev)}
            >
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

            {toggle && (
                <DynamicImportPopUpCard
                    setToggle={setToggle}
                    fullImages={fullImages}
                    website={websiteURL}
                />
            )}
        </>
    );
}

export default ProjectCard;

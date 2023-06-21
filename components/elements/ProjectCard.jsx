import Image from "next/image";


function ProjectCard({
    setToggle,
    thumbnail,
    sizeThumbnail,
    backgroundColor,
    fullImages,
    websiteURL,
    setCurrentWebsiteURL,
    setCurrentFullImages
}) {
    
    function handleClick() {
        setToggle((prev) => !prev);
        setCurrentWebsiteURL(websiteURL);
        setCurrentFullImages(fullImages[0]);
    }

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
                onClick={()=>handleClick()} 
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

        </>
    );
}

export default ProjectCard;

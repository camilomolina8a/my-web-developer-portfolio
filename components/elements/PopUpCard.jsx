import Image from "next/image";

function PopUpCard({ setToggle, fullImages, website }) {
    return (
        <div className="fixed flex items-center justify-center top-[0] right-0 w-[100%] h-[100%] bg-popup z-[999]">
            
            <div className="flex flex-col justify-evenly items-center relative h-[95%] md:h-[70%] lg:h-[90%] w-[90%] md:w-[80%] lg:w-[60%] rounded-[10px] popup">

                <span className=" absolute top-5 right-5 cursor-pointer">
                    <Image
                        src="/images/close.svg"
                        height="18px"
                        width="18px"
                        alt="close icon"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </span>

                <div className="flex items-start mt-[50px] md:mt-10 h-[70%] md:h-[80%] lg:h-[420px] w-[90%] md:w-[85%] rounded-[10px] overflow-y-scroll">
                    <Image
                        src={fullImages}
                        width={800}
                        height={1800}
                        alt="website image"
                        className="object-fill"
                    />
                </div>

                <div className="flex justify-center md:w-[85%]">
                    <a
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                        className=" bg-[#ffffff0d] btn md:w-[35%] text-[#741ff5] font-[600] font-rubik text-[1.1rem] hover:text-white hover:bg-[#741ff5]"
                    >
                        Go to website
                        <span className="ml-[5px] mb-[2px] flex items-center ">
                            <Image
                                src="/images/right-arrow.png"
                                height="15px"
                                width="15px"
                                alt="menu-icon"
                                className="right-arrow"
                            />
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default PopUpCard;

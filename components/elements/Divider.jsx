import Image from "next/image"
import dividerImage from "/public/images/divider.svg"

function Divider() {
  return (
    <div className="flex justify-center max-w-[1140px] mx-auto">
        <span className="w-[60px] md:w-[80px]">
            <Image src={dividerImage} alt="divider"/>
        </span>
    </div>
  )
}

export default Divider
import EarthCanvas from "./canvas/Earth"
import StarsCanvas from "./canvas/Stars"

function Contact() {
  return (
    <div className='relative lg:max-w-[1140px] lg:h-[80vh] border mx-auto'>

        <h1 className='text-white'>CONTACT</h1>

        <div className="flex h-full">

            <div className="w-1/2 h-full border">
                <EarthCanvas/>
            </div>
            
            <div className=" w-1/2 h-full border">
                
            </div>

        </div>

        <StarsCanvas/>

    </div>
  )
}

export default Contact
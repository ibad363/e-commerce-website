import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google';
import Image from "next/image";
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});

const Banner = () => {
  return (
    <div className="max-w-[1170px] mx-auto font-Poppins mt-[140px] bg-black flex flex-col md:flex-row">
        {/* left section */}
        <div className="py-[69px] pl-[56px] pr-[27px] w-full md:max-w-[526px] flex flex-col items-center md:items-start">
          <h4 className="text-[#00FF66] mb-7 text-center md:text-start">Categories</h4>
          <h1 className={`tracking-wide text-4xl md:text-5xl text-[#FAFAFA] mb-8 font-semibold leading-[60px] text-center md:text-start ${inter.className}`}>Enhance Your Great Experience</h1>
          {/* Timer */}
          <div className="mb-10 flex flex-wrap gap-6">
            <div className="w-[62px] h-[62px] rounded-full bg-white text-black font-semibold flex flex-col items-center justify-center">
              23 <span className="text-[11px] font-normal -mt-1">Hours</span>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white text-black font-semibold flex flex-col items-center justify-center">
              05 <span className="text-[11px] font-normal -mt-1">Days</span>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white text-black font-semibold flex flex-col items-center justify-center">
              59 <span className="text-[11px] font-normal -mt-1">Minutes</span>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white text-black font-semibold flex flex-col items-center justify-center">
              35 <span className="text-[11px] font-normal -mt-1">Seconds</span>
            </div>
          </div>

          {/* Button */}
          <div className=''>
              <Button variant="destructive" className='py-6 px-8 bg-[#00FF66] rounded font-medium hover:bg-[#00ff66db] text-[#FAFAFA]'>View All Products</Button>
          </div>
        </div>

        {/* right Section */}
        <div className="w-full md:max-w-[644px] flex justify-center items-center p-6">
          <Image
            src={"/assets/banner/JBL.png"}
            alt="JBL"
            width={580}
            height={580}
            className="object-cover"
          ></Image>
        </div>
    </div>
  )
}

export default Banner
import { ArrowRight,ArrowLeft  } from 'lucide-react';
import { Smartphone, Monitor , Gamepad } from 'lucide-react';
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});

const Category = () => {
  return (
    <div className="max-w-[1170px] mx-auto font-Poppins mt-[80px]">

        {/* red heading */}
        <div className="flex items-center gap-5 p-2 xl:p-0">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold  tracking-wide">Categories</p>
        </div>

        {/* Black Heading */}
        <div className='flex items-center justify-between mt-5 p-2 xl:p-0'>
            {/* Browse By Category */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mx-auto md:mx-0 gap-4 md:gap-[87px]'>
                <h1 className={`text-4xl tracking-wide font-semibold text-center ${inter.className}`}>Browse By Category</h1>
            </div>

            {/* Arrow section */}
            <div className='gap-7 hidden md:flex'>
                <ArrowLeft className='cursor-pointer'/>
                <ArrowRight className='cursor-pointer'/>
            </div>
        </div>

        {/* Categories */}
        <div className='my-[65px] flex flex-wrap justify-center gap-[30px]'>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <Smartphone size={56} strokeWidth={1} />
                <p>Phones</p>
            </div>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <Monitor size={56} strokeWidth={1} />
                <p>Computers</p>
            </div>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <TbDeviceWatchStats size={56} strokeWidth={1} />
                <p>SmartWatch</p>
            </div>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <CiCamera size={56} strokeWidth={0} />
                <p>Camera</p>
            </div>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <CiHeadphones size={56} strokeWidth={0} />
                <p>HeadPhones</p>
            </div>

            <div className='max-w-[170px] w-full h-[145px] flex flex-col justify-center gap-4 items-center border rounded hover:bg-[#DB4444] hover:text-white cursor-pointer'>
                <Gamepad size={56} strokeWidth={1} />
                <p>Gaming</p>
            </div>
        </div>

        {/* Line */}
        <div className='h-[0.5px] mx-auto bg-black'></div>
    </div>
  )
}

export default Category

// pt-[25px] pb-[64px] px-[57px]
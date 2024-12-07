import { ChevronRight } from 'lucide-react';
import iphone from "../../../public/assets/hero/iphone.svg"
import appleLogo from "../../../public/assets/hero/Apple-logo.svg"
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: [ '600'],
});

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1170px] mx-auto flex justify-center lg:justify-between font-Poppins">
            {/* left section */}
            <div className="max-w-[217px] w-full space-y-4 p-3 pt-10 hidden lg:block">
                <div className='flex justify-between cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Woman’s Fashion</h4>
                    <span><ChevronRight/></span>
                </div>
                <div className='flex justify-between cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Men’s Fashion</h4>
                    <span><ChevronRight/></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Electronics</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Home & Lifestyle</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Medicine</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Sports & Outdoor</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Baby’s & Toys</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Groceries & Pets</h4>
                    <span></span>
                </div>
                <div className='flex cursor-pointer'>
                    <h4 className='hover:border-b hover:border-black transition-all duration-300'>Health & Beauty</h4>
                    <span></span>
                </div>

            </div>

            {/* line */}
            <div className='mx-4 w-[0.5px] bg-black hidden lg:block'></div>

            {/* right section */}
            <div className='bg-black max-w-[892px] w-full h-auto md:h-[344px] mt-10'>
                {/* Content */}
                <div className='flex flex-col md:flex-row justify-center items-center h-[90%] text-white p-1 sm:p-4'>
                    <div className='px-4 sm:px-16 space-y-5 mt-6'>
                        {/* Heading */}
                        <div className='flex items-center justify-center md:justify-start space-x-5'>
                            <Image src={appleLogo} alt='Apple Logo'></Image>
                            <p>iPhone 14 Series</p>
                        </div>

                        {/* discount */}
                        <div className='max-w-[298px]'>
                            <h1 className={`text-4xl sm:text-5xl text-center md:text-left ${inter.className}`}>Up to 10% off Voucher</h1>
                        </div>

                        {/* shop now */}
                        <div className='flex gap-3 justify-center md:justify-start'>
                            <p className='border-b'>Shop Now</p>
                            <span className=''><ArrowRight/></span>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='sm:max-w-[496px] w-auto mt-8'>
                        <Image src={iphone} alt='Iphone Image' width={300} height={300} className='w-full h-full object-cover'></Image>
                    </div>
                </div>

                {/* Slider scroller*/}
                <div className='flex gap-3 justify-center p-3'>
                    <div className='bg-gray-500 hover:bg-[#DB4444] w-3 h-3 border-white hover:border-[2px] rounded-full'></div>
                    <div className='bg-gray-500 hover:bg-[#DB4444] w-3 h-3 border-white hover:border-[2px] rounded-full'></div>
                    <div className='bg-gray-500 hover:bg-[#DB4444] w-3 h-3 border-white hover:border-[2px] rounded-full'></div>
                    <div className='bg-gray-500 hover:bg-[#DB4444] w-3 h-3 border-white hover:border-[2px] rounded-full'></div>
                    <div className='bg-gray-500 hover:bg-[#DB4444] w-3 h-3 border-white hover:border-[2px] rounded-full'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
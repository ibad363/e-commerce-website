import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});

const NewArrival = () => {
  return (
    <div className="max-w-[1170px] mx-auto font-Poppins mt-[140px] mb-8 check">

        {/* red heading */}
        <div className="flex items-center gap-5 p-2 xl:p-0">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold  tracking-wide">Featured</p>
        </div>

        {/* Black Heading */}
        <div className='mt-5 p-2 xl:p-0 flex justify-center md:justify-start'>
            <h1 className={`text-4xl tracking-wide font-semibold text-center ${inter.className}`}>Explore Our Products</h1>
        </div>

        {/* Image Section */}
        <div className='text-[#FAFAFA] flex flex-col lg:flex-row items-center gap-[30px] mt-[60px]'>

            {/* First Box */}
            <div className='bg-black w-[570px] h-[600px]'>
                1
            </div>

            <div className='flex flex-col gap-[30px]'>
                {/* Second Box */}
                <div className='bg-black w-[570px] h-auto md:h-[284px] flex flex-col md:flex-row'>
                    2
                    <div>2</div>
                </div>

                <div className='flex flex-col md:flex-row items-center gap-[30px]'>

                    {/* Third Box */}
                    <div className='bg-black w-full md:w-[270px] h-[284px]'>
                        3
                    </div>
                    
                    {/* Fourth Box */}
                    <div className='bg-black w-full md:w-[270px] h-[284px]'>
                        4
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrival
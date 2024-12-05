import { ArrowRight,ArrowLeft  } from 'lucide-react';
import semicolon from "../../../public/assets/flash-sales/Semiclone.svg"
import Image from 'next/image';
import ProductCard from '../other/ProductCard';
import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});
const productDetails = [
    {name: "HAVIT HV-G92 Gamepad", price: 120, oldprice: 160, image: "/assets/flash-sales/1.png", discount: 40, rating: 5, reviews: 88},
    {name: "AK-900 Wired Keyboard", price: 960, oldprice: 1160, image: "/assets/flash-sales/2.png", discount: 35, rating: 4, reviews: 75},
    {name: "IPS LCD Gaming Monitor", price: 370, oldprice: 400, image: "/assets/flash-sales/3.png", discount: 30, rating: 5, reviews: 99},
    {name: "S-Series Comfort Chair", price: 375, oldprice: 400, image: "/assets/flash-sales/4.png", discount: 25, rating: 4, reviews: 99},
]


const FlashSale = () => {
  return (
    <div className="max-w-[1170px] mx-auto mt-[140px] font-Poppins">
        {/* Today */}
        <div className="flex items-center gap-5 p-2 xl:p-0">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold  tracking-wide">Today’s</p>
        </div>

        {/* Heading */}
        <div className='flex items-center justify-between mt-6 p-2 xl:p-0'>

            {/* flash sale heading */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mx-auto md:mx-0 gap-4 md:gap-[87px]'>
                <h1 className={`text-4xl  tracking-wide font-semibold ${inter.className}`}>Flash Sales</h1>
                {/* counter */}
                <div className='flex flex-wrap items-center'>
                    <Counter timeUnit='Days' value="03"/>
                    <Image src={semicolon} alt="semicolon" className='mx-[17px] mt-3'></Image>
                    <Counter timeUnit='Hours' value="23"/>
                    <Image src={semicolon} alt="semicolon" className='mx-[17px] mt-3'></Image>
                    <Counter timeUnit='Minutes' value="19"/>
                    <Image src={semicolon} alt="semicolon" className='mx-[17px] mt-3'></Image>
                    <Counter timeUnit='Seconds' value="56"/>
                </div>
            </div>

            {/* Arrow section */}
            <div className='gap-7 hidden md:flex'>
                <ArrowLeft className='cursor-pointer'/>
                <ArrowRight className='cursor-pointer'/>
            </div>
        </div>

        {/* Products */}
        <div className='mt-10 mb-[60px] flex flex-wrap justify-center gap-[30px]'>
            {productDetails.map((items , i)=> {
                return( 
                    <>
                        <ProductCard key={i} discount={items.discount} imagePath={items.image} name={items.name} price={items.price} oldprice={items.oldprice} rating={items.rating} reviews={items.reviews}/>
                    </>
                )
            })}
        </div>

        {/* Button */}
        <div className='flex justify-center my-[60px]'>
            <Button variant="destructive" className='py-6 rounded max-w-[234px] w-full'>View All Products</Button>
        </div>

        {/* Line */}
        <div className='h-[0.5px] mx-auto bg-black'></div>
    </div>
  )
}

export default FlashSale


function Counter(props: {timeUnit: string, value: string}) {
    return (
        <>
            <div>
                <p className='text-xs'>{props.timeUnit}</p>
                <p className={`font-bold text-[32px] ${inter.className}`}>{props.value}</p>
            </div>
        </>
    )
}
"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Inter } from "next/font/google";
import ProductCard from '../components/ProductCard';
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const ProductDeatail = () => {
    const [active,setActive] = useState(0)

    const images = [
        "/assets/product-detail/1.svg",
        "/assets/product-detail/2.svg",
        "/assets/product-detail/3.svg",
        "/assets/product-detail/4.svg",
        // "/assets/product-detail/5.svg",
    ];

    const productDetails = [
        {name: "HAVIT HV-G92 Gamepad", price: 120, oldprice: 160, image: "/assets/flash-sales/1.png", discount: 40, rating: 5, reviews: 88},
        {name: "AK-900 Wired Keyboard", price: 960, oldprice: 1160, image: "/assets/flash-sales/2.png", discount: 35, rating: 4, reviews: 75},
        {name: "IPS LCD Gaming Monitor", price: 370, oldprice: 400, image: "/assets/flash-sales/3.png", discount: 30, rating: 5, reviews: 99},
        {name: "RGB liquid CPU Cooler", price: 160, oldprice: 170, image: "/assets/best-selling/3.png", rating: 4, reviews: 65},
    ]

  return (
    <div className='max-w-[1170px] mx-auto font-Poppins'>
        {/* Top Section */}
        <div className='my-20 flex gap-3'>
            <p className='opacity-50'>Account</p><span className='opacity-50'>/</span>
            <p className='opacity-50'>Gaming</p><span className='opacity-50'>/</span>
            <p>Havic HV G-92 Gamepad</p>
        </div>

        {/* Middle Section */}
        <div className='flex gap-[30px]'>

            {/* Four Image Section */}
            <div className='max-w-[170px] w-full flex flex-col gap-4'>
                {images.map((key,i)=>(  
                    <div 
                    key={i} 
                    className={`w-full h-[138px] bg-[#F5F5F5] flex justify-center items-center rounded 
                    ${active === i ? "border-2 border-black" : ""} `} 
                    onClick={() => { setActive(i) }}>
                        <Image src={key} alt='Product Image' width={121} height={114}></Image>
                    </div>
                ))}

            </div >

            {/* Full Image Section */}
            <div className='bg-[#F5F5F5] max-w-[500px] w-full flex justify-center items-center'>
                <Image src={images[active]} width={446} height={315} alt='' />
            </div>

            {/* Product Details */}
            <div className='ml-[31px] flex flex-col gap-6'>
                <div className='flex flex-col gap-4'>

                    {/* Product Name */}
                    <h3 className={`${inter.className} text-2xl tracking-wide font-semibold`}>Havic HV G-92 Gamepad</h3>

                    {/* Rating, Reviews & Availablily */}
                    <div className='flex items-center'>
                        <div className='text-[#FFAD33] text-2xl mr-2'>★★★★<span className='text-black opacity-25'>★</span></div>
                        <p className='text-black opacity-50 text-[14px] font-normal pr-4 mr-4 border-r-[#9c9a99] border-r'>(150 Reviews)</p>
                        <p className='text-[#00FF66]'>In Stock</p>
                    </div>

                    {/* Price */}
                    <p className={`${inter.className} text-2xl tracking-wide`}>$192.00</p>
                </div>

                {/* Product Description */}
                <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

                {/* Line */}
                <div className='h-[1px] bg-black opacity-50'></div>

                {/* Colors */}
                <div className='flex gap-6'>
                    <p className='text-[20px] tracking-wide'>Colours:</p>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#A0BCE0] w-5 h-5 rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-[#E07575] w-5 h-5 rounded-full hover:border-2 hover:border-black'></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className='my-[140px]'>
            {/* red heading */}
            <div className="flex items-center gap-5 p-2 xl:p-0">
                <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
                <p className="text-[#DB4444] font-semibold  tracking-wide">Related Item</p>
            </div>

            {/* Products */}
            <div className='mt-[60px] flex flex-wrap gap-[30px]'>
                {productDetails.map((items , i)=> {
                    return(
                        <ProductCard key={i} discount={items.discount} imagePath={items.image} name={items.name} price={items.price} oldprice={items.oldprice} rating={items.rating} reviews={items.reviews}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductDeatail
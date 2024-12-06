import { ArrowRight,ArrowLeft  } from 'lucide-react';
import ProductCard from '../ProductCard';
import { Button } from '@/components/ui/button';
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});

const productDetails = [
    {name: "Breed Dry Dog Food", price: 100, image: "/assets/explore-products/1.png", rating: 3, reviews: 35},
    {name: "CANON EOS DSLR Camera", price: 360, image: "/assets/explore-products/2.png", rating: 4, reviews: 95},
    {name: "ASUS FHD Gaming Laptop", price: 700, image: "/assets/explore-products/3.png", rating: 5, reviews: 325},
    {name: "Curology Product Set", price: 500, image: "/assets/explore-products/4.png", rating: 4, reviews: 145},
    {name: "Kids Electric Car", price: 960, image: "/assets/explore-products/5.png", rating: 5, reviews: 65},
    {name: "Jr. Zoom Soccer Cleats", price: 1160, image: "/assets/explore-products/6.png", rating: 5, reviews: 35},
    {name: "GP11 Shooter USB Gamepad", price: 660, image: "/assets/explore-products/7.png", rating: 4, reviews: 55},
    {name: "Quilted Satin Jacket", price: 660, image: "/assets/explore-products/8.png", rating: 4, reviews: 55},
]

const ExploreProducts = () => {
  return (
    <div className="max-w-[1170px] mx-auto font-Poppins mt-[70px]">

        {/* red heading */}
        <div className="flex items-center gap-5 p-2 xl:p-0">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold  tracking-wide">Our Products</p>
        </div>       

        {/* Black Heading */}
        <div className='flex items-center justify-between mt-6 p-2 xl:p-0'>

            {/* Explore Our Products */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mx-auto md:mx-0'>
                <h1 className={`text-4xl tracking-wide font-semibold text-center ${inter.className}`}>Explore Our Products</h1>
            </div>

            {/* Arrow section */}
            <div className='gap-7 hidden md:flex'>
                <ArrowLeft className='cursor-pointer'/>
                <ArrowRight className='cursor-pointer'/>
            </div>
        </div>

        {/* Products */}
        <div className='flex flex-wrap justify-center gap-[30px] mt-[60px]'>
            {productDetails.map((items, i) => {
                return (
                    <ProductCard key={i} imagePath={items.image} name={items.name} price={items.price} rating={items.rating} reviews={items.reviews} />
                )
            })}
        </div>

        {/* Button */}
        <div className='flex justify-center mt-[60px]'>
            <Button variant="destructive" className='py-6 rounded max-w-[234px] w-full'>View All Products</Button>
        </div>
    </div>
  )
}

export default ExploreProducts
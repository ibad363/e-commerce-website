import { Button } from "@/components/ui/button"
import ProductCard from "../ProductCard";
import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: ['600',"700"],
});

const productDetails = [
    {name: "The north coat", price: 260, oldprice: 360, image: "/assets/best-selling/1.png", rating: 5, reviews: 65},
    {name: "Gucci duffle bag", price: 960, oldprice: 1160, image: "/assets/best-selling/2.png", rating: 4, reviews: 55},
    {name: "RGB liquid CPU Cooler", price: 160, oldprice: 170, image: "/assets/best-selling/3.png", rating: 4, reviews: 58},
    {name: "Small BookSelf", price: 360, oldprice: 400, image: "/assets/best-selling/4.png", rating: 5, reviews: 68},
]

const BestSelling = () => {
  return (
    <div className='max-w-[1170px] mx-auto font-Poppins mt-[70px]'>

        {/* red heading */}
        <div className="flex items-center gap-5 p-2 xl:p-0">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
            <p className="text-[#DB4444] font-semibold  tracking-wide">This Month</p>
        </div>

        {/* Black Heading */}
        <div className='flex flex-col sm:flex-row items-center justify-between mt-5 p-2 xl:p-0 gap-4'>
            {/* Best Selling Products */}
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center mx-auto md:mx-0 '>
                <h1 className={`text-4xl tracking-wide font-semibold text-center ${inter.className}`}>Best Selling Products</h1>
            </div>

            {/* Button */}
            <div>
                <Button variant="destructive" className='py-6 px-12 rounded max-w-[234px] w-full'>View All</Button>
            </div>
        </div>

        {/* Products */}
        <div className='flex flex-wrap justify-center gap-[30px] mt-[60px]'>
            {productDetails.map((items, i) => {
                return (
                    <ProductCard key={i} imagePath={items.image} name={items.name} price={items.price} oldprice={items.oldprice} rating={items.rating} reviews={items.reviews} />
                )
            })}
        </div>
    </div>
  )
}

export default BestSelling
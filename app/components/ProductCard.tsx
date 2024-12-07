import Image from "next/image"
import hearticon from "../../public/assets/flash-sales/Fill Heart.svg"
import eyeicon from "../../public/assets/flash-sales/Fill Eye.svg"
import Link from "next/link"

const ProductCard = (props: {name: string, price: number , oldprice?: number, rating: number, reviews:number, discount?: number, imagePath: string}) => {

  return (
    <div className="max-w-[270px] w-full h-[350px] rounded">

        {/* Image Stuff */}
        <div className="h-[250px] p-3 bg-[#F5F5F5] flex flex-col items-center justify-center relative group">
          {/* Discount */}
          {props.discount && <div className="absolute top-4 left-4 bg-[#DB4444] w-[55px] h-[26px] rounded-sm text-xs flex items-center justify-center text-white">-{props.discount}%</div>}

          {/* icons */}
          <div className="absolute top-4 right-3">
                <Image src={hearticon} alt="Heart icon" className="cursor-pointer"></Image>
                <Image src={eyeicon} alt="Eye icon" className="cursor-pointer"></Image>
          </div>

          {/* Product Image */}
          <div className="w-[190px] h-[180px] flex items-center justify-center p-2">
                <Image src={props.imagePath} alt="Product Image" width={200} height={200} className="object-contain w-full h-full"></Image>
            </div>

          {/* add to cart */}
          <button className="absolute bottom-0 w-full bg-black text-white flex justify-center py-2 rounded-b-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            Add To Cart
          </button>
        </div>

        {/* Product Detail */}
        <div className="mt-4 flex flex-col gap-1">
          <Link href={"/productdetail"}><h3 className="cursor-pointer">{props.name}</h3></Link>
          <p className="text-[#DB4444]">${props.price} 
            {props.oldprice && <span className="text-black opacity-50 ml-3 line-through">${props.oldprice}</span>}
          </p>
          <div className="flex items-center">
            {Array.from({length:5}, (_ , index) =>{
              return(
                <span key={index} className={`text-2xl ${index < props.rating ? "text-[#FFAD33]" : "text-black opacity-25"}`}>★</span>
              )
            })}
            <span className="text-black opacity-50 ml-2">({props.reviews})</span></div>
        </div>
    </div>
  )
}

export default ProductCard
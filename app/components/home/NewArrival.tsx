import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const NewArrival = () => {
  return (
    <div className="max-w-[1170px] mx-auto font-Poppins mt-[140px]">
      {/* red heading */}
      <div className="flex items-center gap-5 p-2 xl:p-0">
        <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
        <p className="text-[#DB4444] font-semibold  tracking-wide">Featured</p>
      </div>

      {/* Black Heading */}
      <div className="mt-5 p-2 xl:p-0 flex justify-center md:justify-start">
        <h1 className={`text-4xl tracking-wide font-semibold text-center ${inter.className}`}>
          Explore Our Products
        </h1>
      </div>

      {/* Image Section */}
      <div className="text-[#FAFAFA] flex flex-wrap lg:flex-nowrap items-center gap-6 mt-[60px]">
        {/* First Box */}
        <div className="bg-black w-full lg:w-[570px] h-auto lg:h-[600px] flex justify-center items-end relative">
          <Image
            src="/assets/new-arrival/11.png"
            alt="11"
            width={511}
            height={511}
            className="object-contain"
          />
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <h3 className="text-[#FAFAFA] text-lg lg:text-2xl font-semibold">
              PlayStation 5
            </h3>
            <p className="text-[#FAFAFA] text-[12px] lg:text-[14px] font-normal">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <span
              className={`text-[#ffffff] w-auto lg:w-[81px] font-medium hover:border-b-[1px] hover:border-b-[#ffffff] mt-2 cursor-pointer ${inter.className}`}
            >
              Shop Now
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-auto">
          {/* Second Box */}
          <div className="bg-black w-full h-auto lg:h-[284px] flex flex-col lg:flex-row lg:justify-end lg:items-end items-center relative p-4 lg:p-0">
            <div className="absolute bottom-4  left-4 flex flex-col gap-2">
              <h3 className="text-[#FAFAFA] text-lg lg:text-2xl font-semibold">
                Women’s Collections
              </h3>
              <p className="text-[#FAFAFA] text-[12px] lg:text-[14px] font-normal">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <span
                className={`text-[#ffffff] w-auto lg:w-[81px] font-medium hover:border-b-[1px] hover:border-b-[#ffffff] mt-2 cursor-pointer ${inter.className}`}
              >
                Shop Now
              </span>
            </div>
            <Image
              src="/assets/new-arrival/12.png"
              alt="12"
              width={210}
              height={210}
              className="object-contain mr-4 lg:mr-[15px]"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-[30px]">
            {/* Third Box */}
            <div className="bg-black w-full md:w-[48%] lg:w-[270px] h-[250px] lg:h-[284px] flex justify-center relative">
              <Image
                src="/assets/new-arrival/12.png"
                alt="12"
                width={210}
                height={210}
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <h3 className="text-[#FAFAFA] text-lg lg:text-2xl font-semibold">
                  Speakers
                </h3>
                <p className="text-[#FAFAFA] text-[12px] lg:text-[14px] font-normal">
                  Amazon wireless speakers
                </p>
                <span
                  className={`text-[#ffffff] w-auto lg:w-[81px] font-medium hover:border-b-[1px] hover:border-b-[#ffffff] mt-2 cursor-pointer ${inter.className}`}
                >
                  Shop Now
                </span>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="bg-black w-full md:w-[48%] lg:w-[270px] h-[250px] lg:h-[284px] flex justify-center relative">
              <Image
                src="/assets/new-arrival/13.png"
                alt="13"
                width={210}
                height={222}
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <h3 className="text-[#FAFAFA] text-lg lg:text-2xl font-semibold">
                  Perfume
                </h3>
                <p className="text-[#FAFAFA] text-[12px] lg:text-[14px] font-normal">
                  GUCCI INTENSE OUD EDP
                </p>
                <span
                  className={`text-[#ffffff] w-auto lg:w-[81px] font-medium hover:border-b-[1px] hover:border-b-[#ffffff] mt-2 cursor-pointer ${inter.className}`}
                >
                  Shop Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="mt-[140px] flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-[88px]">

        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={"/assets/new-arrival/icon-Services.svg"} alt="icon" width={80} height={80}></Image>
          <h3 className="text-xl font-semibold tracking-wide mt-6">FREE AND FAST DELIVERY</h3>
          <p className="text-[14px]">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={"/assets/new-arrival/icon-Customer service.svg"} alt="icon" width={80} height={80}></Image>
          <h3 className="text-xl font-semibold tracking-wide mt-6">24/7 CUSTOMER SERVICE</h3>
          <p className="text-[14px]">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col gap-2 items-center text-center">
          <Image src={"/assets/new-arrival/Icon-secure.svg"} alt="icon" width={80} height={80}></Image>
          <h3 className="text-xl font-semibold tracking-wide mt-6">MONEY BACK GUARANTEE</h3>
          <p className="text-[14px]">We return money within 30 days</p>
        </div>  
      </div>
    </div>
  );
};

export default NewArrival;
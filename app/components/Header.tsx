"use client"
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useRef } from "react";
import { Inter } from 'next/font/google';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {

  const sheetTrigger = useRef<HTMLButtonElement>(null);
  const handleMenuClick = () => {
    if (sheetTrigger.current) {
      sheetTrigger.current.click();
    }
  };

  return (
    <div className="w-full font-Poppins border-b-[0.5px] border-black ">
      {/* Top Header */}
      <div className="max-w-[1440px] h-12 mx-auto bg-black items-center hidden lg:flex ">
        <div className="w-[1170px] mx-auto flex items-center justify-between p-3">
          <div className="flex items-center justify-center flex-1 gap-2">
            <p className="text-white text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <span className="text-white ml-2 hover:underline cursor-pointer">ShopNow</span>
          </div>
          <p className="text-white flex items-center cursor-pointer">
            English{" "}
            <span className="ml-2">
              <img src="/assets/header/Vector2.svg" />
            </span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1170px] mx-auto h-24 flex items-center justify-between lg:mt-4 p-3">

        <h1 className={`text-xl sm:text-2xl font-bold ${inter.className}`}>Exclusive</h1>

        <ul className="hidden md:flex gap-4">
          <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            Contact
          </li>
          <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            About
          </li>
          <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            Sign Up
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center justify-between bg-[#F5F5F5] rounded-sm h-[38px] px-4">
            <Input
              className="w-52 outline-none border-none bg-transparent"
              placeholder="What are you looking for?"
            />
            <Search />
          </div>
          <img src="/assets/header/Vector.svg" />
          <img src="/assets/header/Cart1 with buy.svg" />
          <Menu className="md:hidden cursor-pointer" onClick={handleMenuClick}/>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="hidden">
        <Sheet>
          <SheetTrigger ref={sheetTrigger}></SheetTrigger>
          <SheetContent className="w-[12rem]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-4">
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    Home
                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    Contact
                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    About
                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    Sign Up
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    
  );
};

export default Header;
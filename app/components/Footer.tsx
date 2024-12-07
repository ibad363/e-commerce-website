import { Inter } from 'next/font/google';
const inter = Inter({
    subsets: ['latin'],
    weight: [ '600'],
});

const Footer = () => {
  return (
    <div className="mt-[140px] max-w-[1440px] check -[440px] h-auto mx-auto bg-black text-[#FAFAFA] font-Poppins">

        {/* Description */}
        <div className="max-w-[1170px] mx-auto flex flex-wrap justify-center gap-[87px] pt-[80px] px-4 sm:px-0">
            {/* Exclusive */}
            <div className='w-[300px] sm:w-[217px]'>
                <div className='flex flex-col gap-6'>
                    <h3 className={`${inter.className} text-2xl font-bold`}>Exclusive</h3>
                    <p className='font-medium text-xl'>Subscribe</p>
                    <p>Get 10% off your first order</p>
                </div>
                {/* Input */}
                <div className='mt-4 flex justify-between border-[#FAFAFA] border-[1.5px] rounded opacity-40 '>
                    <input type="email" placeholder='Enter your email' className='bg-transparent px-4 py-3 outline-none'/>
                    <button className='px-4 py-3'>
                        <img src="/assets/footer/send.svg" alt="Send Icon" />
                    </button>
                </div>
            </div>

            {/* Support */}
            <div className='flex flex-col gap-4 w-[300px] sm:w-[175px]'>
                <p className='font-medium text-xl mb-5'>Support</p>
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>

            {/* Account */}
            <div className='flex flex-col gap-4 w-[300px] sm:w-[123px]'>
                <p className='font-medium text-xl mb-5'>Account</p>
                <a className='hover:underline cursor-pointer'>My Account</a>
                <a className='hover:underline cursor-pointer'>Login / Register</a>
                <a className='hover:underline cursor-pointer'>Cart</a>
                <a className='hover:underline cursor-pointer'>Wishlist</a>
                <a className='hover:underline cursor-pointer'>Shop</a>
            </div>

            {/* Quick Link */}
            <div className='flex flex-col gap-4 w-[300px] sm:w-[109px]'>
                <p className='font-medium text-xl mb-5'>Quick Link</p>
                <a className='hover:underline cursor-pointer'>Privacy Policy</a>
                <a className='hover:underline cursor-pointer'>Terms Of Use</a>
                <a className='hover:underline cursor-pointer'>FAQ</a>
                <a className='hover:underline cursor-pointer'>Contact</a>
            </div>

            {/* Download App */}
            <div className='flex flex-col gap-6 w-[300px] sm:w-[198px]'>
                <p className='font-medium text-xl mb-3'>Download App</p>

                {/* Qr Section */}
                <div className='flex flex-col gap-2'>
                    <p className='opacity-70 text-xs'>Save $3 with App New User Only</p>
                    <div className='flex gap-2'>
                        <img src="/assets/footer/Qr Code.svg" alt="Qr Code" />
                        <div className='flex flex-col gap-2'>
                            <img src="/assets/footer/play-store.svg" alt="Play store" />
                            <img src="/assets/footer/app-store.svg" alt="App store" />
                        </div>
                    </div>
                </div>
                {/* Icons */}
                <div className='flex gap-6'>
                    <img src="/assets/footer/Icon-Facebook.svg" alt="FB icon" className='cursor-pointer'/>
                    <img src="/assets/footer/icon-instagram.svg" alt="Instagram icon" className='cursor-pointer'/>
                    <img src="/assets/footer/Icon-Twitter.svg" alt="Twitter icon" className='cursor-pointer'/>
                    <img src="/assets/footer/Icon-Linkedin.svg" alt="Linkedin icon" className='cursor-pointer'/>
                </div>             
            </div>
        </div>
        {/* Line */}
        <div className='bg-white opacity-40 w-full h-[1px] mt-[60px]'></div>

        {/* CopyRight */}
        <div className='flex flex-col sm:flex-row justify-center py-4'>
            <div className='flex'>
                <img src="/assets/footer/copyright.svg" alt="CopyRight Icon" className='mx-2'/>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
            <p className='ml-2'>Made by <a href="https://www.linkedin.com/in/ibad-ur-rehman-developer/" className='hover:border-b-2 hover:border-white'>@Ibad Ur Rehman</a></p>
        </div>
    </div>
  )
}

export default Footer
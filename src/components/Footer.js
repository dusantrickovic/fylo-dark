import logo from '../imgs/logo.svg';
import location from '../imgs/loc.svg';
import phone from '../imgs/icon-phone.svg';
import email from '../imgs/icon-email.svg'

function Footer() {
    return (
        <footer className=" h-full grid grid-rows-2 pl-4 items-center md:pl-32 xl:pl-64 pt-0 md:pt-12 md:h-96 bg-gray-900">            
            <a href="#header-logo">
                <img src={logo} id="footer-logo" alt="logo" className="w-26 h-10 mt-32 cursor-pointer" />          
            </a>
            <div className="flex flex-col -mt-10 md:mt-0 md:flex-row flex-grow md:pt-4">
                <div className="flex pt-0 md:pt-0 ">
                <img src={location} alt="location" className="w-3 h-3" />
                <p className="pl-4 w-72 text-xs">Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="text-left md:flex-row pl-0 pt-3 md:pl-14 xl:pl-28 md:pt-0 flex-col">
                    <div className="flex items-center">
                        <img src={phone} alt="phone-icon" className="w-3 h-3" />
                        <p className="text-xs pl-4">+1-543-123-4567</p>
                    </div>

                    <div className="flex  pt-3 items-center">
                        <img src={email} alt="email-icon" className="w-4 h-3" />
                        <p className="text-xs pl-3">example@fylo.com</p>
                    </div>

                    </div>
                    <div className="pl-0 ml-0 relative md:pl-8 xl:-mt-1 xl:pl-32 mt-6 md:mt-0">
                        <ul className="flex-col md:pt-0 pt-6 md:grid md:grid-cols-2 text-sm">
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">About us</li>
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Contact us</li>
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Jobs</li>
                            <li className="pl-0 md:pl-12 mb-6 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Terms</li>
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Press</li>
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Privacy</li>
                            <li className="pl-0 md:pl-12 mb-3 md:pb-2 md:mb-0 cursor-pointer text-gray-300 transition hover:text-white delay-150">Blog</li>
                        </ul>
                </div>
            </div>


        </footer>
    )
}

export default Footer

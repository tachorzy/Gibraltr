import Link from 'next/link'
import { albula, supremeRegular } from '../utils/localNextFonts'

const Footer = () => {

    return(
        <div>
            <div className={supremeRegular.className + " flex flex-col md:flex-row bg-stone-800 h-full md:h-52 py-8 md:pl-28 max-md:px-14 gap-x-24"}>
                <span className="md:ml-12 text-stone-200 max-md:mb-6">
                    <h2 className={albula.className + " max-md:text-lg mb-1"}>Gibraltr</h2>
                    <div className={"max-md:w-full w-56 leading-snug"}>Gibraltr is here to help you confidently navigate the world of travel visas. Check the latest visa reqiurements for 197+ countries.</div>
                </span>
                <div className={"gap-y-2"}>
                    <h4 className={"text-stone-400 font-medium mb-3 border-stone-400 pb-1 border-b-2 border-t-0 border-x-0 border-solid w-24"}>Documents</h4>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/">Find visas</Link>
                    </li>
                    {/* <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>                        
                        <Link href="/comingsoon">Embassy listing</Link>
                    </li> */}
                </div>
                <div>
                    <h4 className={"text-stone-400 font-medium mb-3 border-stone-400 pb-1 border-b-2 border-t-0 border-x-0 border-solid w-24"}>About Us</h4>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/about">Gibraltr</Link>
                    </li>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/about#our-vision">Our vision</Link>
                    </li>
                </div>
                <div>
                    <h4 className={"text-stone-400 font-medium mb-3 border-stone-400 pb-1 border-b-2 border-t-0 border-x-0 border-solid w-24"}>Support</h4>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/faq">General FAQ</Link>
                    </li>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/faq#visa-faq">Visa FAQ</Link>
                    </li>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/comingsoon">eVisas</Link>
                    </li>
                </div>
            </div> 
            <div className={"bg-stone-800 md:pl-28 pl-12 pb-4"}>
                <span className={"md:ml-12 text-stone-200 text-xs mt-10 md:mt-16"}>© {new Date().getFullYear()} Gibraltr.com. All rights reserved.</span>
            </div> 
        </div>
    );
}

export default Footer;
import Link from 'next/link'
import { Rubik } from '@next/font/google'
import localFont from '@next/font/local'

const rubik = Rubik({
    subsets: ['latin'],
    weight: '400'
})

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const supremeRegular = localFont({
    src: '../fonts/Supreme-Regular.otf',
    weight: '200'
})

const Footer = () => {

    return(
        <div>
            <div className={supremeRegular.className + " flex flex-row bg-stone-800 h-52 py-8 md:pl-28 pl-10 gap-x-24"}>
                <span>
                    <h2 className={albula.className + " ml-12 text-stone-200 mb-1"}>Gibraltr</h2>
                    <div className={"ml-12 text-stone-200 w-56 leading-snug"}>Gibraltr is here to help you confidently navigate the world of travel visas. Check the latest visa reqiurements for 197+ countries.</div>
                </span>
                <div className={"gap-y-2"}>
                    <h4 className={"text-stone-400 font-medium mb-3 border-stone-400 pb-1 border-b-2 border-t-0 border-x-0 border-solid w-24"}>Documents</h4>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>
                        <Link href="/">Find visas</Link>
                    </li>
                    <li className={"text-stone-200 hover:text-stone-500 font-medium list-none pb-3"}>                        
                        <Link href="/comingsoon">Embassy listing</Link>
                    </li>
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
                <span className={"ml-12 text-stone-200 text-xs mt-16"}>© {new Date().getFullYear()} Gibraltr.com. All rights reserved.</span>
            </div> 
        </div>
    );
}

export default Footer;
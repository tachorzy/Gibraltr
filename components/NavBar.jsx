import Image from 'next/image'
import Link from 'next/link'
import localFont from '@next/font/local'
import HamburgerMenu from './HamburgerMenu.jsx'

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const navItems = new Map([
    ['Find Visas', { link: '/'}],
    ['About', { link: '/about'}],
    ['FAQ', { link: '/faq'}],
])

const NavBar = () => {
    
    return(
        <div className={albula.className + " absolute top-0 align-baseline h-20 w-screen space-x-12 md:space-x-96 flex flex-row  z-50"}>
            <div className={"flex flex-row relative "}>
                <Link href="/">
                    <Image src="/Gibraltar.svg" width={75} height={75} className={"select-none ml-10 fixed cursor-pointer block md:hidden "} alt="Gibraltr logo"></Image>
                    
                    <Image src="/Gibraltar.svg" width={90} height={90} className={"select-none ml-9 fixed cursor-pointer hidden md:block"} alt="Gibraltr logo"></Image>
                </Link>
                <h1 className={"text-stone-700 font-thin absoltue pt-6 md:mb-0 md:pt-7 ml-[97%] md:ml-[8.5rem] text-3xl md:text-4xl"}>Gibraltr</h1>
            </div>
            <div className={"block md:hidden"}>
                <HamburgerMenu></HamburgerMenu>
            </div>
            <ul className={"w-1/2 list-none mt-10 pr-10 md:pr-24 flex flex-row text-right justify-end max-md:invisible md:visible"}>
                {Array.from(navItems.entries()).map(([title, details], index) => (
                    <Link key={index} className={"mx-4 hover:border-b-4 hover:border-b-stone-700 cursor-pointer hover:border-solid border-l-0 border-t-0 border-r-0 text-stone-700 hidden md:block"} href={details.link}>{title}</Link>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;
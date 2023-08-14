import Image from 'next/image'
import Link from 'next/link'
import localFont from '@next/font/local'
import HamburgerMenu from './hamburgerMenu'

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
        <div className={albula.className + " fixed top-0 align-baseline	bg-stone-200 h-20 w-screen space-x-12 md:space-x-96 flex flex-row shadow-lg z-50"}>
            <div className={"flex flex-row"}>
                <Image src="/Gibraltar.svg" width={75} height={75} className={"ml-10 cursor-pointer block md:hidden "}></Image>
                
                <Image src="/Gibraltar.svg" width={90} height={90} className={"ml-24 cursor-pointer hidden md:block"}></Image>
            
                <h1 className={"text-stone-700 font-thin pt-6 md:lg:xl:2xl:mb-0 md:lg:xl:2xl:pt-7 ml-1.5 text-3xl md:lg:xl:2xl:text-4xl"}>Gibraltr</h1>
            </div>
            <div className={"block md:hidden"}>
                <HamburgerMenu></HamburgerMenu>
            </div>
            <ul className={"w-1/2 list-none mt-10 flex flex-row text-right justify-end max-md:invisible md:visible"}>
                {Array.from(navItems.entries()).map(([title, details], index) => (
                    <Link key={index} className={"mx-4 hover:border-b-4 hover:border-b-stone-700 cursor-pointer hover:border-solid border-l-0 border-t-0 border-r-0 text-stone-700 hidden md:block"} href={details.link}>{title}</Link>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;
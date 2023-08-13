import NavStyle from '../styles/NavBarStyle.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto, Montserrat, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import HamburgerMenu from './hamburgerMenu'

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const NavBar = () => {

    const navItems = new Map([
        ['Find Visas', { link: '/'}],
        ['About', { link: '/about'}],
        ['FAQ', { link: '/faq'}],
    ])
    

    return(
        <div className={albula.className}>
            <div className={NavStyle.navContainer}>
                <div className={NavStyle.brandingContainer}>
                    <Image src="/Gibraltar.svg" width={75} height={75} className={NavStyle.logoMobile}></Image>
                    
                    <Image src="/Gibraltar.svg" width={90} height={90} className={NavStyle.logoDesktop}></Image>
                
                    <h1 className={NavStyle.brandName}>Gibraltr</h1>
                </div>
                <div className={NavStyle.hamburgerMenu}>
                    <HamburgerMenu></HamburgerMenu>
                </div>
                <ul className={NavStyle.navItems}>
                    {Array.from(navItems.entries()).map(([title, details], index) => (
                        <Link className={"mx-4 hover:border-b-4 hover:border-b-stone-700 cursor-pointer hover:border-solid border-l-0 border-t-0 border-r-0 text-stone-700 hidden md:lg:xl:2xl:block"} href={details.link}>{title}</Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
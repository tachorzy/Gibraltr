import NavStyle from '../styles/NavBarStyle.module.css'
import Image from 'next/image'
import { Roboto, Montserrat, Rubik } from '@next/font/google'
import localFont from '@next/font/local'

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const NavBar = () => {

    return(
        <div className={albula.className}>
            <div className={NavStyle.navContainer}>
                <div className={NavStyle.brandingContainer}>
                    <Image src="/Gibraltar.svg" width={90} height={90} className={NavStyle.logo}></Image>
                    <h1 className={NavStyle.brandName}>Gibraltr</h1>
                </div>
                <ul className={NavStyle.navItems}>
                    <li className={NavStyle.navItem}>Find Visas</li>
                    <li className={NavStyle.navItem}>About</li>
                    <li className={NavStyle.navItem}>FAQ</li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
import NavStyle from '../styles/NavBarStyle.module.css'
import Image from 'next/image'
import { Roboto, Montserrat, Rubik } from '@next/font/google'

const rubik = Rubik({
    subsets: ['latin'],
    weight: '400'
})

const NavBar = () => {

    return(
        <div className={rubik.className}>
            <div className={NavStyle.navContainer}>
                <Image src="Gibraltar.svg" width={90} height={90} className={NavStyle.logo}></Image>
                <h1 className={NavStyle.brandName}>Gibraltr</h1>
            </div>
        </div>

    );
}

export default NavBar;
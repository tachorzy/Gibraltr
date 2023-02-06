import FooterStyle from '../styles/FooterStyle.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto, Montserrat, Rubik } from '@next/font/google'
import localFont from '@next/font/local'

const rubik = Rubik({
    subsets: ['latin'],
    weight: '400'
})

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

const Footer = () => {

    return(
        <div className={rubik.className}>
            <div className={FooterStyle.footerContainer}>
                <span>
                    <div className={albula.className}>
                        <h2 className={FooterStyle.brandingTitle}>Gibraltr</h2>
                    </div>
                    <div className={FooterStyle.infoBox}>Gibraltr is here to help you confidently navigate the world of travel visas. Check the latest visa reqiurements for 197+ countries.</div>
                </span>
                <div className={FooterStyle.sectionColumn}>
                    <h4 className={FooterStyle.header}>Documents</h4>
                    <li className={FooterStyle.text}>
                        <Link href="/">Find visas</Link>
                    </li>
                    <li className={FooterStyle.text}>                        
                        <Link href="/">Embassy listing</Link>
                    </li>
                </div>
                <div>
                    <h4 className={FooterStyle.header}>About Us</h4>
                    <li className={FooterStyle.text}>
                        <Link href="/">Gibraltr</Link>
                    </li>
                    <li className={FooterStyle.text}>
                        <Link href="/">Our vision</Link>
                    </li>
                </div>
                <div>
                    <h4 className={FooterStyle.header}>Support</h4>
                    <li className={FooterStyle.text}>
                        <Link href="/">General FAQ</Link>
                    </li>
                    <li className={FooterStyle.text}>
                        <Link href="/">Visa FAQ</Link>
                    </li>
                    <li className={FooterStyle.text}>
                        <Link href="/">eVisas</Link>
                    </li>
                </div>
            </div> 
            <div className={FooterStyle.copyrightContainer}>
                <span className={FooterStyle.copyright}>© {new Date().getFullYear()} Gibraltr.com. All rights reserved.</span>
            </div> 
        </div>
    );
}

export default Footer;
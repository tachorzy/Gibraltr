import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import HamburgerMenuStyles from '../styles/HamburgerMenuStyle.module.css'
const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    return (
        <div>
            <button className={HamburgerMenuStyles.hamburgerMenuButton}onClick = {() => setIsActive(!isActive)}>
                <Image src="/hamburger-menu-stone-700.svg" width={48} height={42} alt="" className="cursor-pointer"/>
            </button>

            { isActive ? (
                <div className={HamburgerMenuStyles.hamburgerMenuContainer} ref={menuRef}>
                    <div className={HamburgerMenuStyles.hamburgerMenuOptions}>
                        <div className={HamburgerMenuStyles.hamburgerMenuOption}>      
                            <Link href="/" className={HamburgerMenuStyles.hamburgerMenuLink}>
                                Find Visas
                                </Link>
                        </div>
                        <div className={HamburgerMenuStyles.hamburgerMenuOption}>      
                            <Link href="/about" className={HamburgerMenuStyles.hamburgerMenuLink}>
                                About
                                </Link>
                        </div>
                        <div className={HamburgerMenuStyles.hamburgerMenuOption}>
                            <Link href="/faq" className={HamburgerMenuStyles.hamburgerMenuLink}>
                                FAQ
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;
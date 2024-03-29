import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

const HamburgerMenu = ({lightingMode}) => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    return (
        <div>
            <button className={"absolute top-0 right-0 align-baseline mt-2.5 mr-4 p-2 rounded-2xl cursor-pointer select-none border-transparent"}onClick = {() => setIsActive(!isActive)}>
                <Image src={lightingMode == "light" ? "/hamburger-menu-stone-800.svg" : "/hamburger-menu-stone-300.svg"} width={42} height={42} alt="" className="cursor-pointer"/>
            </button>

            { isActive ? (
                <div className={"w-56 h-58 self-end mr-7 bg-stone-200 rounded-2xl right-0 mt-16 shadow-xl"} ref={menuRef}>
                    <div className={"flex flex-col text-stone-700 font-bold py-3"}>
                        <div className={"flex flex-row gap-x-4 items-center hover:bg-stone-300 pl-6 py-2 select-none"}>      
                            <Link href="/" className={"w-full flex flex-row gap-x-4 items-center"}>
                                Find Visas
                                </Link>
                        </div>
                        <div className={"flex flex-row gap-x-4 items-center hover:bg-stone-300 pl-6 py-2 select-none"}>      
                            <Link href="/about" className={"w-full flex flex-row gap-x-4 items-center"}>
                                About
                                </Link>
                        </div>
                        <div className={"flex flex-row gap-x-4 items-center hover:bg-stone-300 pl-6 py-2 select-none"}>
                            <Link href="/faq" className={"w-full flex flex-row gap-x-4 items-center"}>
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
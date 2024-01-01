import Image from 'next/image'
import InfoPopUp from '../../InfoPopUp.jsx';
import { supremeMedium } from '../../../utils/localNextFonts.js'

const KETA = ({destination, requirement}) => {
    if (destination === "South Korea" && requirement === "e-visa")
        return(
            <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
                <span className={"grid grid-cols-3"}>
                    <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>K-ETA</p>
                    <Image src='/taeguk.svg' width={35} height={35} className={"ml-10 max-md:mb-2 md:ml-16"}></Image>
                </span>

                <p className={"max-md:text-sm leading-relaxed"}>The K-ETA is a travel authorization that visa-free visitors to South Korea must receive via an online application.</p>
            </div>  
        );
}

export default KETA;
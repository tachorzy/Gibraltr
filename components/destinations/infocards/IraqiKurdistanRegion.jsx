import Image from 'next/image'
import { supremeMedium } from '../../../utils/localNextFonts.js'

const IraqiKurdistanRegion = ({destination, requirement}) => {
    if (destination === "Iraq" && requirement === "visa on arrival")
        return(
            <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
                <span className={"grid grid-cols-3"}>
                    <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Iraqi Kurdistan Region</p>
                    <Image src='/iraqborder.svg' width={35} height={35} className={"ml-10 md:ml-16"}></Image>
                </span>

                <p className={"max-md:text-sm leading-relaxed"}>If you enter the country via Iraqi Kurdistan, you will be issued a visa that is only valid within the Kurdish Regional Government.</p>
            </div>  
        );
}

export default IraqiKurdistanRegion;
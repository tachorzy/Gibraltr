import Image from 'next/image'
import { supremeMedium } from '../../../utils/localNextFonts.js'

const IraqiKurdistanRegion = ({destination, requirement}) => {
    if (destination === "Iraq" && requirement === "visa on arrival")
        return(
            <div className={supremeMedium.className + " w-72 md:w-96 h-40 2xl:w-[36rem] 2xl:h-60 text-stone-700 border-2 2xl:border-[3.25px] border-inherit border-solid rounded-xl p-4 2xl:p-8 pt-5 2xl:pt-8 border-stone-300 bg-stone-200"}>
                <span className={"grid grid-cols-3"}>
                    <p className={"md:text-lg 2xl:text-2xl font-bold col-span-2 mb-2.5 align-middle"}>Iraqi Kurdistan Region</p>
                    <Image src='/iraqborder.svg' width={44} height={44} className={"ml-28 mb-2 -mt-1 hidden 2xl:block"}></Image>
                    <Image src='/iraqborder.svg' width={35} height={35} className={"ml-16 hidden md:max-2xl:block"}></Image>
                    <Image src='/iraqborder.svg' width={28} height={28} className={"ml-12 -mt-1 md:hidden block"}></Image>
                </span>

                <p className={"max-md:text-sm 2xl:text-xl leading-relaxed"}>If you enter the country via Iraqi Kurdistan, you will be issued a visa that is only valid within the Kurdish Regional Government.</p>
            </div>  
        );
}

export default IraqiKurdistanRegion;
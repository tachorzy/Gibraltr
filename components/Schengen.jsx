import Image from 'next/image'
import { supremeMedium } from '../utils/localNextFonts.js'

const Schengen = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <span className={"grid grid-cols-3"}>
                <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Schengen Zone</p>
                <Image src='/EU.svg' width={35} height={35} className={"ml-16"}></Image>
            </span>

            <p className={"max-md:text-sm leading-relaxed"}> Freedom of movement applies across Schengen Zone. Stay up to 90 days in a 180-day period.</p>
        </div>  
    );
}

export default Schengen;
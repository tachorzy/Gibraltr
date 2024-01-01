import Image from 'next/image'
import { supremeMedium } from '../../../utils/localNextFonts.js'
import { isoCodesList, gccCountries } from '../../../utils/countrydata.js'

const GCC = ({passport, destination}) => {
    const destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
    const passportISO = isoCodesList[passport.toLowerCase()].toLowerCase()

    if (gccCountries.includes(destinationISO) && gccCountries.includes(passportISO))
        return(
            <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
                <span className={"grid grid-cols-3"}>
                    <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Free mobility in GCC</p>
                    <Image src='/dates.svg' width={35} height={35} className={"ml-16"}></Image>
                </span>
                <p className={"max-md:text-sm leading-relaxed"}>As a GCC national, you have the right to a freedom of movement in other GCC nations without a visa.</p> 
            </div>  
        );
}

export default GCC;
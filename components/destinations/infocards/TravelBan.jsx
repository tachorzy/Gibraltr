import Image from 'next/image'
import { supremeMedium } from '../../../utils/localNextFonts.js'

const TravelBan = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40 2xl:w-[36rem] 2xl:h-60 text-stone-700 border-2 2xl:border-[3.25px] border-inherit border-solid rounded-xl p-4 2xl:p-8 pt-5 2xl:pt-8 border-stone-300 bg-stone-200"}>
            <span className={"grid grid-cols-3"}>
                <p className={"md:text-lg 2xl:text-2xl font-bold col-span-2 mb-2.5 align-middle"}>Travel Restricted</p>
                <Image src='/travelban.svg' width={39} height={39} className={"ml-28 -mt-1 hidden 2xl:block"}></Image>
                <Image src='/travelban.svg' width={35} height={35} className={"ml-16 hidden md:max-2xl:block"}></Image>
                <Image src='/travelban.svg' width={22} height={22} className={"ml-14 block md:hidden"}></Image>

            </span>

            <p className={"max-md:text-sm 2xl:text-xl leading-relaxed"}>Either your country of origin or country of destination restricts or bans entry into your destination. Thus, you may be refused a visa.</p>
        </div>  
    );
}

export default TravelBan;
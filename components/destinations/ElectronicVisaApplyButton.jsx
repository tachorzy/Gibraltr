import Image from 'next/image'
import Link from 'next/link.js';
import { supremeMedium } from '../../utils/localNextFonts.js'
import { evisaWebsitesMap } from '/utils/evisawebsites.js'

const ElectronicVisaApplyButton = ({destination, requirement}) => {
    if(requirement === "e-visa" && evisaWebsitesMap.get(destination))
        return(
            <Link href={evisaWebsitesMap.get(destination)} target="_blank">
                <button className={"w-72 md:w-96 h-12 md:h-16 2xl:w-[36rem] 2xl:h-20 bg-stone-600 hover:bg-stone-700 text-stone-200 font-semibold text-xl rounded-xl ring-stone-600 border-none cursor-pointer"}>
                    <div className={supremeMedium.className + " max-md:text-sm 2xl:text-2xl flex flex-row justify-center gap-x-4"}>
                        <p>Apply for an e-Visa!</p>
                            <Image src="/ApplyButtonLink.svg" width={20} height={20} className={"mt-1 2xl:mt-0.5 -ml-1"}></Image>
                    </div>
                </button>  
            </Link>
        )
}

export default ElectronicVisaApplyButton;
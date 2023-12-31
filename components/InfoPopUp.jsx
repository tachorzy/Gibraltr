import Image from 'next/image'
import { supremeMedium } from '../utils/localNextFonts.js'

const InfoPopUp = () => {

    return(
        <span className="group">
            <Image src={'/question-icon.svg'} width={16} height={16} className={"select-none mx-1.5 mt-2 cursor-pointer"}></Image>
            <div className={supremeMedium.className + " absolute md:w-56 h-36 text-stone-700 border-2 border-inherit border-solid rounded-xl mt-1 p-4 border-stone-300 bg-stone-200 invisible group-hover:visible"}>
                <p className={"text-sm leading-relaxed"}>Some visas are glued and may be as large as an entire passport page! Nations with such visas will often require one or two blank <b>visa pages</b>.</p>
            </div>  
        </span>
    );
}

export default InfoPopUp;
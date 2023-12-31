import Image from 'next/image'
import { supremeMedium } from '../utils/localNextFonts.js'

const InfoPopUp = ({information}) => {

    return(
        <span className="group">
            <Image src={'/question-icon.svg'} width={16} height={16} className={"select-none mx-1.5 mt-2 cursor-pointer"}></Image>
            <div className={supremeMedium.className + " absolute md:w-56 h-36 text-stone-700 border-2 border-inherit border-solid rounded-xl mt-1 p-4 border-stone-300 bg-stone-200 invisible group-hover:visible"}>
                <p className={"text-sm leading-relaxed"}>{information}</p>
            </div>  
        </span>
    );
}

export default InfoPopUp;
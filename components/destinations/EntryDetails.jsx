import Image from 'next/image'
import CountUp from "react-countup";
import { supremeBold } from '../../utils/localNextFonts.js'

const EntryDetails = ({requirement}) => {

    return(
        <div className={supremeBold.className + " flex flex-col"}>
            {requirement != "visa required" && requirement != "visa on arrival" && requirement != "e-visa" && requirement != "visa free" ?
                <div className="flex flex-row w-[60%] max-md:pl-3.5 md:mx-4 mt-4 pt-4 border-t-[2.5px] border-stone-400">
                    <Image src={'/calendar.svg'} width={29} height={29} className={"select-none mr-2 md:block hidden"}></Image>
                    <h1 className="text-stone-700 md:text-2xl">
                        <CountUp duration={1} end={requirement}/>
                        {" days visa free"}
                    </h1>
                </div>
                : <></>
            }
            <div className="flex flex-row w-[60%] max-md:pl-3.5 md:mx-4">
                <Image src={'/passport.svg'} width={28} height={28} className={"select-none mt-.5 mb-[4.5rem] mr-2 md:block hidden"}></Image>
                <ul className="list-outside">
                    <h1 className="text-stone-700 md:text-2xl mt-2">{"Bring a valid passport."}</h1>
                    <li className="text-stone-700 md:text-lg w-3/4 mb-8 ml-5 list-disc">{"Some destinations may require up to 6 months of validity."}</li>
                </ul>
            </div>
        </div>  
    );
}

export default EntryDetails;
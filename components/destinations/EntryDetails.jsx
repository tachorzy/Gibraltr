import Image from 'next/image'
import CountUp from "react-countup";
import InfoPopUp from '../InfoPopUp.jsx';
import { supremeMedium, supremeBold } from '../../utils/localNextFonts.js'
import { isoCodesList, schengenCountries } from '../../utils/countrydata.js'

const EntryDetails = ({passport, destination, requirement}) => {

    const destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
    const passportISO = isoCodesList[passport.toLowerCase()].toLowerCase()
    const isSchengenNationalInSchengenZone = schengenCountries.includes(passportISO) && schengenCountries.includes(destinationISO) 

    return(
        <div className={supremeBold.className + " flex flex-col border-t-[2.5px] 2xl:border-t-4 ml-3.5 mt-2 pt-2 2xl:pt-4 md:mb-64 2xl:mb-96 border-stone-400 w-10/12"}>
            {requirement != "visa required" && requirement != "visa on arrival" && requirement != "e-visa" && requirement != "visa free" && requirement != "-1" ?
                <div className="flex flex-row max-md:pl-3.5 pt-4 2xl:mb-2">
                    <Image src={'/calendar.svg'} width={36} height={36} className={"select-none mr-2 2xl:block hidden"}></Image>
                    <Image src={'/calendar.svg'} width={29} height={29} className={"select-none mr-2 md:max-2xl:block hidden"}></Image>
                    <Image src={'/calendar.svg'} width={21} height={21} className={"select-none mr-2 block md:hidden"}></Image>

                    <h1 className="text-stone-700 md:text-2xl 2xl:text-3xl">
                        <CountUp duration={1} end={requirement}/>
                        {" days visa free"}
                    </h1>
                </div>
                : <></>
            }

            <div className="flex flex-row max-md:pl-3.5 2xl:mb-2">
                <Image src={'/passport.svg'} width={33} height={33} className={"select-none mt-.5 mb-2 md:mb-10 mr-2 2xl:block hidden"}></Image>
                <Image src={'/passport.svg'} width={28} height={28} className={"select-none mt-.5 mb-2 md:mb-10 mr-2 md:max-2xl:block hidden"}></Image>
                <Image src={'/passport.svg'} width={20} height={20} className={"select-none mt-.5 mb-14 mr-2 block md:hidden"}></Image>
                <ul className="list-outside">
                    {!isSchengenNationalInSchengenZone ? <h1 className="text-stone-700 md:text-2xl 2xl:text-3xl mt-2">{"Bring a valid passport."}</h1> 
                    : 
                    <div className="flex flex-row">
                        <h1 className="text-stone-700 md:text-2xl 2xl:text-3xl mt-2">{"Bring a valid passport or National ID"}</h1>
                        <span className="pt-2">
                            <InfoPopUp information={"As a citizen of a Schengen member state, you may have the option to use a national ID, if it's recognized by other Schengen states!"}></InfoPopUp>
                        </span>
                    </div>
                    }
                    <li className="text-stone-700 md:text-lg 2xl:text-xl w-3/4 ml-5 list-disc">{"Some destinations may require up to 6 months of validity."}</li>
                </ul>
            </div>
       
            {requirement == "visa on arrival" ?
                <div className="flex flex-row max-md:pl-3.5 pt-2">
                    <Image src={'/passport-control.svg'} width={30} height={30} className={"select-none mt-1.5 mr-2 md:block hidden"}></Image>
                    <Image src={'/passport-control.svg'} width={22} height={22} className={"select-none mt-1.5 -mt-4 mr-2 block md:hidden"}></Image>
                    <h1 className="text-stone-700 md:text-2xl 2xl:text-3xl">{"Have space in your passport"}</h1>
                    <InfoPopUp information={"Some visas are glued and may be as large as an entire passport page! Nations with such visas will often require one or two blank visa pages."}></InfoPopUp>
                </div>
                : <></>
            }
       
        </div>  
    );
}

export default EntryDetails;
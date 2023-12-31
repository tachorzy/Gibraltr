import Link from 'next/link'
import ElectronicVisa from '../components/ElectronicVisa.jsx'
import VisaOnArrival from '../components/VisaOnArrival.jsx'
import Visa from '../components/Visa.jsx'
import VisaFree from '../components/VisaFree.jsx'
import TravelBan from '../components/TravelBan.jsx'
import Schengen from '../components/Schengen.jsx'
import KETA from '../components/KETA.jsx'
import IraqiKurdistanRegion from '../components/IraqiKurdistanRegion.jsx'
import ApplyButton from '../components/ApplyButton.jsx'
import { isoCodesList, schengenCountries } from '/utils/countrydata.js'
import { evisaWebsitesMap } from '/utils/evisawebsites.js'
import { passportDemonyms } from '/utils/demonymdata.js'

export function displayVisaMessage(passport, destination, requirement) {

    const passportISO = isoCodesList[passport.toLowerCase()].toLowerCase()
    const passportDemonym = passportDemonyms.get(passportISO)

    if (requirement !== "visa required" && requirement !== "e-visa" && requirement !== "visa on arrival" && requirement !== "no admission") {
       return( 
            <h3 className={"max-md:w-full w-[85%] text-stone-700 mt-3 md:mt-8 text-sm md:text-3xl justify-between leading-10"}>
                You don't need a visa for {destination} if you have {(/^[aeiou]$/i).test(passportDemonym[0]) ? "an" : "a"} <b>{passportDemonym}
            </b> passport</h3>
       )
    }
    else if (requirement === "visa required" || requirement === "e-visa" || requirement === "visa on arrival" || requirement === "no admission") {
        return (
            <h3 className={"max-md:w-full w-[85%] text-stone-700 mt-3 md:mt-8 text-sm md:text-3xl justify-between leading-10"}>
                You need a visa for {destination} if you have {(/^[aeiou]$/i).test(passportDemonym[0]) ? "an" : "a"} <b>{passportDemonym}
            </b> passport</h3>
        )
    }
}

// these can just go to the components passed as props and the entire component can be rendered conditionally
// export function displaySchengenInfo(destination){
//     let destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
//     if (schengenCountries.includes(destinationISO))
//         return (<Schengen></Schengen>)
// }

// export function displayKETA(destination, requirement){
//     if (destination === "South Korea" && requirement === "e-visa")
//         return(<KETA></KETA>)
// }

// export function displayIraqiKurdistan(destination, requirement){
//     if (destination === "Iraq" && requirement === "visa on arrival")
//         return(<IraqiKurdistanRegion></IraqiKurdistanRegion>)
// }

// This can become its own component and is rendered conditionally based on the destination and e-Visa requirement
export function displayEVisaButton(destination, requirement){ 
    if(requirement === "e-visa" && evisaWebsitesMap.get(destination))
        return(
            <Link href={evisaWebsitesMap.get(destination)} target="_blank">
                <ApplyButton/>
            </Link>
        )
}

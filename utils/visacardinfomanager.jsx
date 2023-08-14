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
import { countries, isoCodesList, schengenCountries } from '/utils/countrydata.js'
import { evisaWebsitesMap } from '/utils/evisawebsites.js'
import DestinationStyle from '../styles/DestinationStyle.module.css'

export function displayVisaMessage(passport, destination, requirement) {
    if (requirement !== "visa required" && requirement !== "e-visa") {
       return( 
            <h3 className={DestinationStyle.visaInfo}>
                You don't need a visa for {destination} if you have a(n) <b>{passport}
            </b> passport</h3>
       )
    }
    else if (requirement === "visa required" || requirement === "e-visa") {
        return (
            <h3 className={DestinationStyle.visaInfo}>
                You need a visa for {destination} if you have a(n) <b>{passport}
            </b> passport</h3>
        )
    }
}

export function displayVisaInfo(requirement){
    switch (requirement) {
        case "e-visa":
            return(<ElectronicVisa/>)
        case "visa required":
            return(<Visa/>)
        case "visa on arrival":
            return(<VisaOnArrival/>)
        case "no admission":
            return(<TravelBan></TravelBan>)
        default:
            return(<VisaFree/>)
    }    
}

export function displaySchengenInfo(destination){
    let destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
    if (schengenCountries.includes(destinationISO))
        return (<Schengen></Schengen>)
}

export function displayKETA(destination, requirement){
    if (destination === "South Korea" && requirement === "e-visa")
        return(<KETA></KETA>)
}

export function displayIraqiKurdistan(destination, requirement){
    if (destination === "Iraq" && requirement === "visa on arrival")
        return(<IraqiKurdistanRegion></IraqiKurdistanRegion>)
}

export function displayEVisaButton(destination, requirement){ 
    if(requirement === "e-visa" && evisaWebsitesMap.get(destination))
        return(
            <Link href={evisaWebsitesMap.get(destination)} target="_blank">
                <ApplyButton/>
            </Link>
        )
}

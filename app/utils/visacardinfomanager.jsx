import ElectronicVisa from '../components/evisa.jsx'
import VisaOnArrival from '../components/visaonarrival.jsx'
import Visa from '../components/visa.jsx'
import VisaFree from '../components/visafree.jsx'
import TravelBan from '../components/travelban.jsx'
import Schengen from '../components/schengen.jsx'
import KETA from '../components/k-eta.jsx'
import IraqiKurdistanRegion from '../components/iraqikurdistan.jsx'
import { countries, isoCodesList, schengenCountries } from '/utils/countrydata.js'
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

export function displayTravelBan(passport, destination, requirement){
    if (passport === "Israel")
        switch(destination) {
            case "Algeria":
                return(<TravelBan></TravelBan>)
            case "Brunei":
                return(<TravelBan></TravelBan>)
            case "Iran":
                return(<TravelBan></TravelBan>)
            case "Iraq":
                return(<TravelBan></TravelBan>)
            case "Kuwait": 
                return(<TravelBan></TravelBan>)
            case "Lebanon":
                return(<TravelBan></TravelBan>)
            case "Libya":
                return(<TravelBan></TravelBan>)
            case "Malaysia":
                return(<TravelBan></TravelBan>)
            case "Pakistan":
                return(<TravelBan></TravelBan>)
            case "Saudi Arabia":
                return(<TravelBan></TravelBan>)
            case "Syria":
                return(<TravelBan></TravelBan>)
            case "Yemen":
                return(<TravelBan></TravelBan>)
        }

    if (passport == "Iran" && destination === "Libya")
        return(<TravelBan></TravelBan>)
    if (passport === "North Korea" && destination === "Japan")
        return(<TravelBan></TravelBan>)
    if (passport === "Pakistan" && destination === "Israel")
        return(<TravelBan></TravelBan>)
    if (passport === "United States" && destination === "North Korea")
        return(<TravelBan></TravelBan>)
    /*Restriction is unclear for Ukranians entering Russia, Passport Index lists it as visa free but other sources site it as restricted*/
    // if (passport === "Ukraine" && destination === "Russia")
    //     return(<TravelBan></TravelBan>)
}

export function displayVisaInfo(requirement){
    switch (requirement) {
        case "e-visa":
            return(<ElectronicVisa/>)
        case "visa required":
            return(<Visa/>)
        case "visa on arrival":
            return(<VisaOnArrival/>)
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

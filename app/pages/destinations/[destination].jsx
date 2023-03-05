import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/navbar'
import ElectronicVisa from '../../components/evisa.jsx'
import VisaOnArrival from '../../components/visaonarrival.jsx'
import Visa from '../../components/visa.jsx'
import VisaFree from '../../components/visafree.jsx'
import TravelBan from '../../components/travelban.jsx'
import Schengen from '../../components/schengen.jsx'
import KETA from '../../components/k-eta.jsx'
import IraqiKurdistanRegion from '../../components/iraqikurdistan.jsx'
import { countries, isoCodesList, schengenCountries } from '../../scripts/countrydata.js'
import { getVisaRequirements } from '../../scripts/visadata.js'
import DestinationStyle from '../../styles/DestinationStyle.module.css'
import Footer from '../../components/footer.jsx'
import { Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'

const rubik = Rubik({
  subsets: ['latin'],
  weight: '400'
})

const albula = localFont({
    src: '../../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
})

export async function getServerSideProps({ query }){
    const { passport, destination } = query;
    
    if (!passport || !destination)
        return { props: {} }

    const passportKey = passport?.toLowerCase()
    const destinationKey = destination?.toLowerCase()

    const passportISO = isoCodesList[passportKey]
    const destinationISO = isoCodesList[destinationKey]

    const visaRequirements = await getVisaRequirements();
    const key = JSON.stringify({ passportISO, destinationISO });

    const requirement = visaRequirements.get(key);
    return {props: {requirement, passport, destination}}
}

function displayVisaMessage(passport, destination, requirement) {
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

function displayTravelBan(passport, destination, requirement){
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

function displayVisaInfo(requirement){
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

function displaySchengenInfo(destination){
    let destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
    if (schengenCountries.includes(destinationISO))
        return (<Schengen></Schengen>)
}

function displayKETA(destination, requirement){
    if (destination === "South Korea" && requirement === "e-visa")
        return(<KETA></KETA>)
}

function displayIraqiKurdistan(destination, requirement){
    if (destination === "Iraq" && requirement === "visa on arrival")
        return(<IraqiKurdistanRegion></IraqiKurdistanRegion>)
}

export default function Destination({ requirement, passport, destination }){
    return(
        <div>
            <Head>
                <title>Gibraltar</title>
                <meta name="description" content="It's Best to Know Before You Go!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/gibraltar-solid.svg" />
            </Head>

            <div className={DestinationStyle.navBar}>
                <NavBar></NavBar>
            </div>

            <div className={DestinationStyle.main}>
                <div className={albula.className}>
                    <div className={DestinationStyle.gridContainer}>
                        <div className={DestinationStyle.countryProfileContainer}>
                            <div className={DestinationStyle.countryProfileHeader}>
                                <Image src={`/destinationIcons/${destination}.svg`} width={130} height={130} className={DestinationStyle.PassportImg}></Image>
                                <h1 className={DestinationStyle.countryProfileTitle}>{destination}</h1>
                            </div>
                            <div className={DestinationStyle.visaMessage}>
                                {displayVisaMessage(passport, destination, requirement)}
                            </div>
                        </div>

                        <div className={rubik.className}>
                            <div className={DestinationStyle.infoContainer}>
                                <span className={DestinationStyle.infoCardContainer}>
                                    {displayVisaInfo(requirement)}
                                    {displaySchengenInfo(destination)}
                                    {displayTravelBan(passport, destination, requirement)}
                                    {displayKETA(destination, requirement)}
                                    {displayIraqiKurdistan(destination, requirement)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}   
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/navbar'
import ElectronicVisa from '../../components/evisa.jsx'
import VisaOnArrival from '../../components/visaonarrival.jsx'
import Visa from '../../components/visa.jsx'
import Schengen from '../../components/schengen.jsx'
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
    else if (requirement === "visa required" || requirement == "e-visa") {
        return (
            <h3 className={DestinationStyle.visaInfo}>
                You need a visa for {destination} if you have a(n) <b>{passport}
            </b> passport</h3>
        )
    }
}

function displayVisaInfo(requirement){
    switch(requirement){
        case "e-visa":
            return(<ElectronicVisa></ElectronicVisa>)
        case "visa required":
            return(<Visa></Visa>)
        case "visa on arrival":
            return(<VisaOnArrival></VisaOnArrival>)
    }    
}

function displaySchengenInfo(destination){
    let destinationISO = isoCodesList[destination.toLowerCase()].toLowerCase()
    if(schengenCountries.includes(destinationISO))
        return (<Schengen></Schengen>)
}

export default function Destination({ requirement, passport, destination}){
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
                        <div className={DestinationStyle.countryProfileHeader}>
                            <Image src={`/destinationIcons/${destination}.svg`} width={130} height={130} className={DestinationStyle.PassportImg}></Image>
                            <h1 className={DestinationStyle.countryProfileTitle}>{destination}</h1>
                        </div>
                        <div className={rubik.className}>
                            <div className={DestinationStyle.infoContainer}>
                                <span className={DestinationStyle.visaMessage}>
                                    {displayVisaMessage(passport, destination, requirement)}
                                </span>

                                {displayVisaInfo(requirement)}
                                {displaySchengenInfo(destination)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}   
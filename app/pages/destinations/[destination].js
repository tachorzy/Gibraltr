import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/navbar'
import ElectronicVisa from '../../components/evisa.js'
import VisaOnArrival from '../../components/visaonarrival.js'
import Visa from '../../components/visa.js'
import { countries, isoCodes, countryCodeList } from '../../scripts/countrydata.js'
import { getVisaRequirements } from '../../scripts/visadata.js'
import styles from '../../styles/result.module.css'
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

    const passportISO = isoCodes[passportKey]
    const destinationISO = isoCodes[destinationKey]

    const visaRequirements = await getVisaRequirements();
    const key = JSON.stringify({ passportISO, destinationISO });

    const requirement = visaRequirements.get(key);
    return {props: {requirement, passport, destination}}
}

function displayVisaMessage(passport, destination, requirement) {
    if (requirement !== "visa required" && requirement !== "e-visa") {
       return( 
            <h3 className={styles.visaInfo}>
                You don't need a visa for {destination} if you have a(n) <b>{passport}
            </b> passport</h3>
       )
    }
    else if (requirement === "visa required" || requirement == "e-visa") {
        return (
            <h3 className={styles.visaInfo}>
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

export default function Destination({ requirement, passport, destination}){
    return(
        <div>
            <Head>
                <title>Gibraltar</title>
                <meta name="description" content="It's Best to Know Before You Go!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/gibraltar-solid.svg" />
            </Head>

            <div className={styles.navBar}>
                        <NavBar></NavBar>
            </div>

            <div className={styles.main}>
                <div className={albula.className}>
                    <div className={styles.gridContainer}>
                        <div className={styles.countryProfileHeader}>
                            <Image src={`/destinationIcons/${destination}.svg`} width={130} height={130} className={styles.PassportImg}></Image>
                            <h1 className={styles.countryProfileTitle}>{destination}</h1>
                        </div>
                        <div className={rubik.className}>
                                {displayVisaMessage(passport, destination, requirement)}
                                {displayVisaInfo(requirement)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}   
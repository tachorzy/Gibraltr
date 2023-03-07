import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/navbar'
import ApplyButton from '../../components/applybutton.jsx'
import Footer from '../../components/footer.jsx'
import { displayVisaMessage, displayTravelBan, displayVisaInfo, displaySchengenInfo, displayKETA, displayIraqiKurdistan, displayEVisaButton } from '../../utils/visacardinfomanager.jsx'
import { countries, isoCodesList, schengenCountries } from '../../utils/countrydata.js'
import { getVisaRequirements } from '../../utils/visadata.js'
import DestinationStyle from '../../styles/DestinationStyle.module.css'
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
                                    {displayEVisaButton(destination, requirement)}
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
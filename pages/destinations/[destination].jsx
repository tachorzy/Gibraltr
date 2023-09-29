import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../../components/NavBar.jsx'
import Footer from '../../components/Footer.jsx'
import { displayVisaMessage, displayTravelBan, displayVisaInfo, displaySchengenInfo, displayKETA, displayIraqiKurdistan, displayEVisaButton } from '../../utils/VisaCardInfoManager.jsx'
import { countries, isoCodesList, schengenCountries } from '../../utils/countrydata.js'
import { getVisaRequirements } from '../../utils/visadata.js'
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
                <title>Gibraltar - Discover Visas</title>
                <meta name="description" content="It's Best to Know Before You Go!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Gibraltar-solid.svg" />
            </Head>

            <div className={"sticky"}>
                <NavBar lightingMode="light"></NavBar>
            </div>

            <div className={"bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right min-h-screen flex flex-col justify-between content-center md:pl-24 pl-6"}>
                <div className={albula.className + " flex flex-col md:flex-row md:mt-24 mt-12"}>
                    <div className={"flex flex-col w-11/12 md:ml-7"}>
                        <div className={"text-stone-700 mt-24 flex flex-row gap-x-0.5"}>
                            <Image src={`/destinationIcons/${destination}.svg`} width={130} height={130} className={"mx-4 mt-6 align-bottom hidden md:block"}></Image>
                            <Image src={`/destinationIcons/${destination}.svg`} width={90} height={90} className={"mx-4 mt-6 align-bottom block md:hidden "}></Image>

                            <h1 className={"mt-20 text-4xl md:text-6xl md:mr-52"}>{destination}</h1>
                        </div>
                        <div className={"max-md:w-[96%] w-11/12 max-md:pl-3.5 md:mx-4"}>
                            {displayVisaMessage(passport, destination, requirement)}
                        </div>
                    </div>

                    <div className={rubik.className + " grid grid-cols-2 grid-rows-4 mr-10 mt-24 mb-24 gap-x-56"}>
                        <span className={"flex flex-col gap-y-6 row-span-3 mt-16"}>
                            {displayVisaInfo(requirement)}
                            {displaySchengenInfo(destination)}
                            {/* {displayTravelBan(passport, destination, requirement)} */}
                            {displayKETA(destination, requirement)}
                            {displayIraqiKurdistan(destination, requirement)} 
                            {displayEVisaButton(destination, requirement)}
                        </span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );

}   
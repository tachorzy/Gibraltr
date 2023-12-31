import Image from 'next/image'
import NavBar from '../../components/NavBar.jsx'
import Footer from '../../components/Footer.jsx'
import PageHead from '../../components/PageHead.jsx'
import EntryDetails from '../../components/destinations/EntryDetails.jsx'
import SearchBar from '../../components/SearchBar.jsx'
import { displayVisaMessage, displayTravelBan, displayVisaInfo, displaySchengenInfo, displayKETA, displayIraqiKurdistan, displayEVisaButton } from '../../utils/VisaCardInfoManager.jsx'
import { countries, isoCodesList, schengenCountries } from '../../utils/countrydata.js'
import { getVisaRequirements } from '../../utils/visadata.js'
import { albula, supremeBold, supremeMedium } from '../../utils/localNextFonts.js'
import { supremeRegular } from '../../utils/localNextFonts.js'

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
            <PageHead title={"Gibraltr - Discover Visas"} description={"It's Best to Know Before You Go!"}/>

            <NavBar lightingMode="light"></NavBar>

            <div className={"bg-stone-50 bg-no-repeat bg-contain bg-opacity-90 bg-right min-h-screen flex flex-col justify-between content-center md:pl-24 pl-6"}>
                <div className={albula.className + " flex flex-col md:flex-row md:mt-24 mt-12"}>
                    <div className={"flex flex-col w-11/12 md:ml-7"}>
                        <div className={"text-stone-700 mt-24 flex flex-row gap-x-0.5"}>
                            <Image src={`/destinationIcons/${destination}.svg`} width={130} height={130} className={"mx-4 mt-6 align-bottom hidden md:block"}></Image>
                            <Image src={`/destinationIcons/${destination}.svg`} width={90} height={90} className={"mx-4 mt-6 align-bottom block md:hidden "}></Image>

                            <h1 className={"mt-20 text-4xl md:text-6xl md:mr-52"}>{destination}</h1>
                        </div>
                        <div className={"max-md:w-[96%] w-11/12 max-md:pl-3.5 md:mx-4 my-2"}>
                            {displayVisaMessage(passport, destination, requirement)}
                        </div>
                        <EntryDetails requirement={requirement}></EntryDetails>
                    </div>

                    <div className={supremeRegular.className + " grid md:grid-cols-2 md:grid-rows-4 gap-x-20 mr-3.5 md:mt-24 mb-24 gap-x-56"}>
                        <span className={"flex flex-col gap-y-6 row-span-3 mt-8 md:mt-16"}>
                            {displayVisaInfo(requirement)}
                            {displaySchengenInfo(destination)}
                            {/* {displayTravelBan(passport, destination, requirement)} */}
                            {displayKETA(destination, requirement)}
                            {displayIraqiKurdistan(destination, requirement)} 
                            {displayEVisaButton(destination, requirement)}
                        </span>
                    </div>
                </div>

                <div className={supremeMedium.className + " relative md:ml-9 mb-48"}>
                    <h2 className={supremeBold.className + " z-50 relative text-stone-700 text-4xl mb-6"}>Caught the travel bug?<br/>Feel free to search for more!</h2>
                    <div className="z-50 relative">
                        <SearchBar></SearchBar>
                    </div>
                    <Image src="/arrow-twirl.svg" width={475} height={475} className="absolute z-0 mt-1 mb-64 top-0 ml-[57%] opacity-40"></Image>
                </div>
            </div>
            <span className="z-40 relative">
                <Footer/>

            </span>
        </div>
    );

}   
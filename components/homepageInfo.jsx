import Image from 'next/image'
import localFont from '@next/font/local'
require('tailwind-scrollbar')

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const supremeRegular = localFont({
    src: '../fonts/Supreme-Regular.otf',
    weight: '200'
})

// const generalInfoCards = [['Search for tourist visas','Know whether or not your passport grants visa-free entry for your destination.'], ['Find what you need', 'Be sure whether visa applications are available online, at arrival or at an embassy.'], ['Enter Stress Free', 'Arrive to immigration with rest assured that you\'ve met your visa requirements.']]

const generalInfoCards = new Map([
    ['Search For Tourist Visas', { info: 'Know whether or not your passport grants visa-free entry for your destination.', image: '/magnify.svg' }],
    ['Find What You Need', { info: 'Be sure whether visa applications are available online, at arrival or at an embassy.', image: '/visa.svg' }],
    ['Enter Stress Free', { info: 'Arrive to immigration with rest assured that you\'ve met your visa requirements.', image: '/passport-control-2.svg' }]
])

const visaInfoCards = [['Visa Required', 'You must apply for a visa prior to entry. This likely means you\'ll have to file documents, pay a fee, and visiting an embassy.'], ['Visa-On-Arrival', 'Before going through customs, you\'ll have to fill out a form and possibly pay an entry-fee at the airport.'], ['E-Visa', 'Electronic visas are filled out online on an official government website or through a travel agency.']]


const HomePageInfo = () => {

    return(
        <div className={supremeRegular.className}>
            <h2 className={"text-stone-700 text-sm md:text-xl font-bold col-span-2 md:ml-0 ml-2 align-middle"}>{"It's always best to know, before you go."}</h2>
            <p className={"text-stone-700 md:text-lg md:mr-96 sm:mr-10"}>{"That's why we're here to keep you aware of visa requirements for wherever you're headed."}<br/>{"Stay informed of your options of a tourist visa for your destination and how to get them!"}</p>
            <div className={"flex md:flex-row flex-col md:mt-7 mt-14 gap-x-10 mb-24 md:gap-y-0 gap-y-10"}>
                    {Array.from(generalInfoCards.entries()).map(([title, infoCardDetails], index) => (
                        <span className={"md:w-56 md:h-36 w-11/12 sm:h-24 flex md:flex-col flex-row text-stone-700 border-4 border-inherit border-dotted rounded-xl p-4 pt-5 border-stone-700"}>
                            <Image src={infoCardDetails.image} width={34} height={34}></Image>
                            <div className={"flex flex-col md:ml-0 ml-2 md:text-xs sm:text-base"}>
                                <p className={"text-sm font-bold col-span-2 md:ml-0 ml-2 align-middle"}>{title}</p>
                                <p className={"flex flex-col md:ml-0 ml-2 md:text-xs sm:text-base"}>{infoCardDetails.info}</p>
                            </div>
                        </span>
                    ))}
            </div>
            {/* remove stylesheet and make it DRY */}
            <h3 className={styles.glossaryTitle}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
            {/* <div className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>Visa Required</p>
                        <p className={styles.infoBoxText}>{"You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy."}</p>
                    </span>
                </div>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>Visa-on-arrival</p>
                        <p className={styles.infoBoxText}>{"Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport."}</p>
                    </span>
                </div>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={""}>e-Visa</p>
                        <p className={styles.infoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
                    </span>
                </div>  
            </div> */}
    </div>
    );
}

export default HomePageInfo;
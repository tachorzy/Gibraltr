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

const generalInfoCards = new Map([
    ['Search for tourist visas', { info: 'Know whether or not your passport grants visa-free entry for your destination.', image: '/magnify.svg' }],
    ['Find what you need', { info: 'Be sure whether visa applications are available online, at arrival or at an embassy.', image: '/documents.svg' }],
    ['Enter stress free', { info: 'Arrive to immigration rest assured that you\'ve met your visa requirements.', image: '/customs-officer.svg' }]
])

const visaInfoCards = [['Visa Required', 'You must apply for a visa prior to entry. This likely means you\'ll have to file documents, pay a fee, and visiting an embassy.'], ['Visa-On-Arrival', 'Before going through customs, you\'ll have to fill out a form and possibly pay an entry-fee at the airport.'], ['E-Visa', 'Electronic visas are filled out online on an official government website or through a travel agency.']]


const HomePageInfo = () => {

    return(
        <div className={supremeRegular.className}>
            <h2 className={"text-stone-700 text-xl md:text-3xl font-bold col-span-2 md:ml-0 mr-2.5 mb-1.5 align-middle"}>{"It's always best to know, before you go."}</h2>
            <p className={"text-stone-700 text-lg md:text-xl md:mr-96 mr-5 w-[95%] md:w-[35rem] lg:w-[46rem]"}>{"That's why we're here to guide you through visas for wherever you're headed."}<br/>{"Stay informed of your options of a tourist visa for your destination and how to get them!"}</p>
            <div className={"flex md:flex-row flex-col md:mt-7 mt-14 mb-24 gap-x-4 md:gap-y-0 gap-y-10"}>
                    {Array.from(generalInfoCards.entries()).map(([title, infoCardDetails], index) => (
                        <div key={index} className={"relative overflow-hidden md:w-60 md:h-36 bg-stone-200 w-11/12 sm:h-24 flex md:flex-col flex-row text-stone-700 border-[3px] border-inherit border-solid rounded-xl p-4 pt-5 max-lg:p-5 max-lg:py-6 border-stone-300"}>
                            <Image src={infoCardDetails.image} width={105} height={105} className="absolute ml-48 md:ml-[8.25rem] mt-7 z-0"></Image>
                            <div className={"flex flex-col md:ml-0 ml-2 md:text-xs sm:text-base mb-2 z-50"}>
                                <p className={"text-base font-bold col-span-2 md:ml-0 ml-2 align-middle"}>{title}</p>
                                <p className={"flex flex-col w-[80%] md:ml-0 ml-2 md:text-xs text-base"}>{infoCardDetails.info}</p>
                            </div>
                        </div>
                    ))}
            </div>

            <h3 className={supremeMedium.className + " font-bold text-3xl text-stone-700 mb-10"}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
            <div className={"flex md:flex-row flex-col md:mt-7 mt-14 gap-x-4 mb-24 md:gap-y-0 gap-y-10"}>
                {visaInfoCards.map(([visaType, visaDetails], index) => (
                    <div key={index} className={supremeMedium.className + "relative overflow-hidden md:w-60 md:h-36 bg-stone-200 w-11/12 sm:h-24 flex flex-col text-stone-700 border-[3px] border-inherit border-solid rounded-xl p-4 pt-5 max-lg:p-5 max-lg:py-6 border-stone-300"}>
                        <p className={"text-base font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>{visaType}</p>
                        <p className={"flex flex-col md:lg:xl:ml-0 ml-2 md:lg:text-xs text-base"}>{visaDetails}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePageInfo;
import styles from '../styles/Home.module.css'
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


const HomePageInfo = () => {

    return(
        <div className={supremeRegular.className}>
            <h2 className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>{"It's always best to know, before you go."}</h2>
            <p className={"text-stone-700 md:lg:xl:text-lg md:lg:xl:mr-96 sm:mr-10"}>{"That's why we're here to keep you aware of visa requirements for wherever you're headed."}<br/>{"Stay informed of your options of a tourist visa for your destination and how to get them!"}</p>
            <div className={"flex md:lg:xl:flex-row flex-col md:lg:xl:2xl:mt-7 mt-14 gap-x-10 mb-24 md:lg:xl:gap-y-0 gap-y-10"}>
                <span className={"md:lg:xl:w-56 md:lg:xl:h-36 w-11/12 sm:h-24 flex md:lg:xl:flex-col flex-row text-stone-700 border-4 border-inherit border-dotted rounded-xl p-4 pt-5 border-stone-700"}>
                    <Image src='/magnify.svg' width={34} height={34}></Image>
                    <div className={"flex flex-col md:lg:xl:ml-0 ml-2 md:lg:text-xs sm:text-base"}>
                        <p className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>Search for tourist visas</p>
                        <p className={"flex flex-col md:lg:xl:ml-0 ml-2 md:lg:text-xs sm:text-base"}>Know whether or not your passport grants visa-free entry for your destination.</p>
                    </div>
                </span>
                <span className={"md:lg:xl:w-56 md:lg:xl:h-36 w-11/12 sm:h-24 flex md:lg:xl:flex-col flex-row text-stone-700 border-4 border-inherit border-dotted	rounded-xl p-4 pt-5 border-stone-700"}>
                    <Image src='/visa.svg' width={34} height={34}></Image>
                    <div className={"flex flex-col md:lg:xl:ml-0 ml-2 md:lg:text-xs sm:text-base"}>
                        <p className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>Find what you need</p>
                        <p className={"flex flex-col md:lg:xl:ml-0 ml-2 md:lg:text-xs sm:text-base"}>Be sure whether visa applications are available online, at arrival or at an embassy.</p>
                    </div>
                </span>
                <span className={styles.infoBox}>
                    <Image src='/passport-control-2.svg' width={34} height={34}></Image>
                    <div className={styles.infoBoxText}>
                        <p className={"text-sm font-bold col-span-2 md:lg:xl:ml-0 ml-2 align-middle"}>Enter Stress Free</p>
                        <p className={styles.infoBoxText}>{"Arrive to immigration with rest assured that you've met your visa requirements."}</p>
                    </div>
                </span>
            </div>

            <h3 className={styles.glossaryTitle}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
            <div className={styles.infoContainer}>
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
            </div>
    </div>
    );
}

export default HomePageInfo;
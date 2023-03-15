import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

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
            <h2 className={styles.infoTitle}>{"It's always best to know, before you go."}</h2>
            <p className={styles.info}>{"That's why we're here to keep you aware of visa requirements for wherever you're headed."}<br/>{"Stay informed of your options of a tourist visa for your destination and how to get them!"}</p>
            <div className={styles.infoContainer}>
                <span className={styles.infoBox}>
                    <Image src='/magnify.svg' width={34} height={34}></Image>
                    <div className={styles.infoBoxText}>
                        <p className={styles.infoBoxTitle}>Search for tourist visas</p>
                        <p className={styles.infoBoxText}>Know whether or not your passport grants visa-free entry for your destination.</p>
                    </div>
                </span>
                <span className={styles.infoBox}>
                    <Image src='/visa.svg' width={34} height={34}></Image>
                    <div className={styles.infoBoxText}>
                        <p className={styles.infoBoxTitle}>Find what you need</p>
                        <p className={styles.infoBoxText}>Be sure whether visa applications are available online, at arrival or at an embassy.</p>
                    </div>
                </span>
                <span className={styles.infoBox}>
                    <Image src='/passport-control-2.svg' width={34} height={34}></Image>
                    <div className={styles.infoBoxText}>
                        <p className={styles.infoBoxTitle}>Enter Stress Free</p>
                        <p className={styles.infoBoxText}>{"Arrive to immigration with rest assured that you've met your visa requirements."}</p>
                    </div>
                </span>
            </div>

            <h3 className={styles.glossaryTitle}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
            <div className={styles.infoContainer}>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={styles.infoBoxTitle}>Visa Required</p>
                        <p className={styles.infoBoxText}>{"You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy."}</p>
                    </span>
                </div>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={styles.infoBoxTitle}>Visa-on-arrival</p>
                        <p className={styles.infoBoxText}>{"Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport."}</p>
                    </span>
                </div>
                <div className={styles.infoBox}>
                    <span className={supremeMedium.className}>
                        <p className={styles.infoBoxTitle}>e-Visa</p>
                        <p className={styles.infoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
                    </span>
                </div>  
            </div>
    </div>
    );
}

export default HomePageInfo;
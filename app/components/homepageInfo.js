import styles from '../styles/Home.module.css'
import Image from 'next/image'

const HomePageInfo = () => {

    return(
        <div>
            <h2 className={styles.infoTitle}>It's always best to know, before you go.</h2>
            <p className={styles.info}>That's why we're here to keep you aware of visa requirements for wherever you're headed.<br/>Stay informed of your options of a tourist visa for your destination and how to get them!</p>
            <div className={styles.infoContainer}>
                <span className={styles.infoBox}>
                    <Image src='/magnify.svg' width={34} height={34}></Image>
                    <p className={styles.infoBoxTitle}>Search for tourist visas</p>
                    <p className={styles.infoBoxText}>Know whether or not your passport grants visa-free entry for your destination.</p>
                </span>
                <span className={styles.infoBox}>
                <Image src='/visa.svg' width={34} height={34}></Image>
                    <p className={styles.infoBoxTitle}>Find what you need</p>
                    <p className={styles.infoBoxText}>Be sure whether visa applications are available online, at arrival or at an embassy.</p>
                </span>
                <span className={styles.infoBox}>
                    <Image src='/passport-control-2.svg' width={34} height={34}></Image>
                    <p className={styles.infoBoxTitle}>Enter Stress Free</p>
                    <p className={styles.infoBoxText}>Arrive to immigration with rest assured that you've met your visa requirements.</p>
                </span>
            </div>
            <div>
                <h3 className={styles.glossaryTitle}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
            </div>
    </div>
    );
}

export default HomePageInfo;
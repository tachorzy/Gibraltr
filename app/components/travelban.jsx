import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const TravelBan = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <span className={styles.infoBoxTitleContainer}>
                    <p className={styles.visaInfoBoxTitle}>Travel Restricted</p>
                    {/* <p className={styles.visaInfoBoxTitleSmall}>{"(Korea Electronic Travel Authorization)"}</p> */}
                    <Image src='/travelban.svg' width={35} height={35} className={styles.infoBoxImage}></Image>
                </span>

                <p className={styles.visaInfoBoxText}>Either your country of origin or country of destination restricts or bans entry into your destination. Thus, you may be refused a visa.</p>
            </span>
        </div>  
    );
}

export default TravelBan;
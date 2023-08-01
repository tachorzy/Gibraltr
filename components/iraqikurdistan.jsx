import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const IraqiKurdistanRegion = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <span className={styles.infoBoxTitleContainer}>
                    <p className={styles.visaInfoBoxTitle}>Iraqi Kurdistan Region</p>
                    <Image src='/iraqborder.svg' width={35} height={35} className={styles.infoBoxImage}></Image>
                </span>

                <p className={styles.visaInfoBoxText}>If you enter the country via Iraqi Kurdistan, you will be issued a visa that is only valid within the Kurdish Regional Government.</p>
            </span>
        </div>  
    );
}

export default IraqiKurdistanRegion;
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const Schengen = () => {

    return(
        <div className={styles.infoBox}>
            <span className={supremeMedium.className}>
                <Image src='/EU.svg' width={36} height={36}></Image>
                <p className={styles.infoBoxTitle}>Schengen Zone</p>
                <p className={styles.infoBoxText}>Freedom of travel between other Schengen countries and stay for up to 90 days in a 180-day period. Once you have a visa.</p>
            </span>
        </div>  
    );
}

export default Schengen;
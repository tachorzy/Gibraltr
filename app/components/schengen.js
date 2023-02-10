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
                <Image src='/EU.svg' width={30} height={30}></Image>
                <p className={styles.infoBoxTitle}>Schengen Zone</p>
                <p className={styles.infoBoxText}>Freedom of movement. Stay up to 90 days in a 180-day period. Applies across Schengen Zone.</p>
            </span>
        </div>  
    );
}

export default Schengen;
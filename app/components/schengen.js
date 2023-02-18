import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const Schengen = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <span className={styles.infoBoxTitleContainer}>
                    <p className={styles.visaInfoBoxTitle}>Schengen Zone</p>
                    <Image src='/EU.svg' width={35} height={35} className={styles.infoBoxImage}></Image>
                </span>

                <p className={styles.visaInfoBoxText}> Freedom of movement applies across Schengen Zone. Stay up to 90 days in a 180-day period.</p>
            </span>
        </div>  
    );
}

export default Schengen;
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const ElectronicVisa = () => {

    return(
        <span className={styles.infoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.infoBoxTitle}>e-Visa</p>
                <p className={styles.infoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
            </span>
        </span>  
    );
}

export default ElectronicVisa;
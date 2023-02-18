import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const ElectronicVisa = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.visaInfoBoxTitle}>e-Visa</p>
                <p className={styles.visaInfoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
            </span>
        </div>  
    );
}

export default ElectronicVisa;
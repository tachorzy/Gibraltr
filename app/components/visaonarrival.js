import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const VisaOnArrival = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.visaInfoBoxTitle}>Visa-on-arrival</p>
                <p className={styles.visaInfoBoxText}>Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport.</p>
            </span>
        </div>
    );
}

export default VisaOnArrival;
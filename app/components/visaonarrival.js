import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const VisaOnArrival = () => {

    return(
        <span className={styles.infoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.infoBoxTitle}>Visa-on-arrival</p>
                <p className={styles.infoBoxText}>Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport.</p>
            </span>
        </span>
    );
}

export default VisaOnArrival;
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const VisaOnArrival = () => {

    return(
        <span className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>Visa-on-arrival</p>
            <p className={styles.infoBoxText}>Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport.</p>
        </span>
    );
}

export default VisaOnArrival;
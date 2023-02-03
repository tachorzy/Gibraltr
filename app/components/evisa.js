import styles from '../styles/Home.module.css'
import Image from 'next/image'

const ElectronicVisa = () => {

    return(
        <span className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>e-Visa</p>
            <p className={styles.infoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
        </span>  
    );
}

export default ElectronicVisa;
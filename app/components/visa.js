import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Visa = () => {

    return(
        <span className={styles.infoBox}>
            <p className={styles.infoBoxTitle}>Visa Required</p>
            <p className={styles.infoBoxText}>You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy.</p>
        </span>
    );
}

export default Visa;
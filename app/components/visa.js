import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const Visa = () => {

    return(
        <span className={styles.infoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.infoBoxTitle}>Visa Required</p>
                <p className={styles.infoBoxText}>You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy.</p>
            </span>
        </span>
    );
}

export default Visa;
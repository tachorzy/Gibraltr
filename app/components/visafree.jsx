import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const VisaFree = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <p className={styles.visaInfoBoxTitle}>Visa Free</p>
                <p className={styles.visaInfoBoxText}>You are able to enter visa free However, make note of how long you can stay in the country. As well, as additional entry requirements.</p>
            </span>
        </div>
    );
}

export default VisaFree;
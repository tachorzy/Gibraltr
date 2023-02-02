import styles from '../styles/Home.module.css'

const LowerHomePageInfo = () => {

    return(
        <div>
            <div>
                <h3 className={styles.glossaryTitle}>Familiarize yourself with<br/>the different types of<br/>visa requirements.</h3>
                </div>
                <div className={styles.infoContainer}>
                <span className={styles.infoBox}>
                        <p className={styles.infoBoxTitle}>Visa Required</p>
                        <p className={styles.infoBoxText}>You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy.</p>
                </span>
                <span className={styles.infoBox}>
                        <p className={styles.infoBoxTitle}>e-Visa</p>
                        <p className={styles.infoBoxText}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
                </span>
                <span className={styles.infoBox}>
                        <p className={styles.infoBoxTitle}>Visa-on-arrival</p>
                        <p className={styles.infoBoxText}>Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport.</p>
                </span>
            </div>
        </div>
        
    );
} 

export default LowerHomePageInfo;
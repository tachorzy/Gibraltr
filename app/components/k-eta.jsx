import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const KETA = () => {

    return(
        <div className={styles.visaInfoBox}>
            <span className={supremeMedium.className}>
                <span className={styles.infoBoxTitleContainer}>
                    <p className={styles.visaInfoBoxTitle}>K-ETA</p>
                    {/* <p className={styles.visaInfoBoxTitleSmall}>{"(Korea Electronic Travel Authorization)"}</p> */}
                    <Image src='/taeguk.svg' width={35} height={35} className={styles.infoBoxImage}></Image>
                </span>

                <p className={styles.visaInfoBoxText}>The K-ETA is a travel authorization that visa-free visitors to South Korea must receive via an online application.</p>
            </span>
        </div>  
    );
}

export default KETA;
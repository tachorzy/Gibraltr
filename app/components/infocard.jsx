import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const Card = () => {

    return(
        <div className={styles.infoCard}>
        </div>
    );
}

export default Card;
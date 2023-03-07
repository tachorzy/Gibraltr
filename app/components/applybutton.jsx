import styles from '../styles/Home.module.css'
import DestinationStyles from '../styles/DestinationStyle.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const ApplyButton = ({title}) => {
    let evisa;
    return(
            <button className={DestinationStyles.button}>
                <div className={supremeMedium.className}>
                    <div className={DestinationStyles.buttonLinkContainer}>
                        <p>Apply for an evisa!</p>
                            <Image src="/ApplyButtonLink.svg" width={20} height={20} className={DestinationStyles.buttonLinkIcon}></Image>
                    </div>
                </div>
            </button>  
    );
}

export default ApplyButton;
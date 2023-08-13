import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const TravelBan = () => {

    return(
        <div className={supremeMedium.className + " w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <span className={"grid grid-cols-3"}>
                <p className={"text-lg font-bold col-span-2 mb-2.5 align-middle"}>Travel Restricted</p>
                {/* <p className={styles.visaInfoBoxTitleSmall}>{"(Korea Electronic Travel Authorization)"}</p> */}
                <Image src='/travelban.svg' width={35} height={35} className={"ml-16"}></Image>
            </span>

            <p className={"leading-relaxed"}>Either your country of origin or country of destination restricts or bans entry into your destination. Thus, you may be refused a visa.</p>
        </div>  
    );
}

export default TravelBan;
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const Visa = () => {

    return(
        <div className={supremeMedium.className + " w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"text-lg font-bold col-span-2 mb-2.5 align-middle"}>Visa Required</p>
            <p className={"leading-relaxed"}>{"You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy."}</p>
        </div>
    );
}

export default Visa;
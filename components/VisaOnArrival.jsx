import styles from '../styles/Home.module.css'
import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const VisaOnArrival = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40  text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Visa-on-arrival</p>
            <p className={"max-md:text-sm leading-relaxed"}>{"Before going through customs, you'll have to fill out a form and possibly pay an entry-fee at the airport."}</p>
        </div>
    );
}

export default VisaOnArrival;
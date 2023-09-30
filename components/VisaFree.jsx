import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
})

const VisaFree = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Visa Free</p>
            <p className={"max-md:text-sm leading-relaxed"}>You are able to enter visa free However, make note of how long you can stay in the country. As well, as additional entry requirements.</p>
        </div>
    );
}

export default VisaFree;
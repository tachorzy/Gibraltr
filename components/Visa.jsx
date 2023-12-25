import { supremeMedium } from '../utils/localNextFonts.js'

const Visa = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40  text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"md:text-lg font-bold col-span-2 mb-2.5 align-middle"}>Visa Required</p>
            <p className={"max-md:text-sm leading-relaxed"}>{"You must apply for a visa prior to entry. This likely means you'll have to file documents, pay a fee, and visiting an embassy."}</p>
        </div>
    );
}

export default Visa;
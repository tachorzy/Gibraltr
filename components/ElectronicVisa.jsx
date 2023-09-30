import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const ElectronicVisa = () => {

    return(
        <div className={supremeMedium.className + " w-72 md:w-96 h-40 text-stone-700 border-2 border-inherit border-solid rounded-xl p-4 pt-5 border-stone-300 bg-stone-200"}>
            <p className={"md:text-lg font-bold col-span-2 mb-2.5"}>e-Visa</p>
            <p className={"max-md:text-sm leading-relaxed"}>Electronic visas are filled out online on an official government website or through a travel agency.</p>
        </div>  
    );
}

export default ElectronicVisa;
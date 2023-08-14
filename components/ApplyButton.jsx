import Image from 'next/image'
import localFont from '@next/font/local'

const supremeMedium = localFont({
    src: '../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const ApplyButton = ({title}) => {
    let evisa;
    return(
            <button className={"w-96 h-16 bg-stone-600 hover:bg-stone-700 text-stone-200 font-semibold text-xl rounded-xl ring-stone-600 border-none cursor-pointer"}>
                <div className={supremeMedium.className + " flex flex-row justify-center gap-x-4"}>
                    <p>Apply for an e-Visa!</p>
                        <Image src="/ApplyButtonLink.svg" width={20} height={20} className={"mt-1"}></Image>
                </div>
            </button>  
    );
}

export default ApplyButton;
import localFont from '@next/font/local'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import { supremeRegular, supremeMedium, supremeBold, supremeExtraBold } from '../../utils/localNextFonts.js'

const AboutUsCredits = () => {

    return(
        <div className={"bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center md:pl-40 pl-10"}>
            {/* <p className={AboutStyles.paragraphLast}>We want to simplify the process of finding visa requirements.</p> */}
            <div className={"flex flex-col md:grid md:grid-cols-3 gap-x-5"}>
                <div>
                    <TypeAnimation
                    className={"text-5xl font-bold text-stone-700 leading-relaxed mt-20 z-10 h-16 mb-3"}
                    sequence={[
                            'Hello',
                            3000,
                            "Hola",
                            3000,
                            "Hej",
                            3000,
                            'Bonjour',
                            3000,
                            'Olá',
                            3000,
                            'Привет',
                            3000,
                            'Γειά σου',
                            3000,
                            'Merhaba',
                            3000,
                            'سلام',
                            3000,
                            '환영',
                            3000,
                            '你好',
                            3000,
                            'Xin chào',
                            3000,
                            'नमस्ते',
                            3000,
                            'আরে',
                            3000,
                            'สวัสดี',
                            3000,
                        ]} 
                        cursor={false}
                        repeat={Infinity}
                        speed={25}
                        deletionSpeed={25}
                    />
                    <h3 className={supremeBold.className + " text-2xl font-bold text-stone-700 pb-1 font-semibold"}>from Tariq Achor Zyad</h3>
                    <h3 className={supremeBold.className + " text-xl font-bold text-stone-500 font-semibold"}>Founder and developer of Gibraltr</h3>
                </div>
                <div className={"md:col-span-2"}>                  
                    <h4 className={"text-stone-700 text-4xl mt-14 mb-3.5 font-bold"}>Made by a traveler<br/><span className="underline decoration-stone-400">for travelers</span></h4>
                    <p className={"w-2/3 md:w-[59%] text-lg text-stone-700 leading-relaxed mb-4"}><strong>{"Planning a trip doesn't come without copious research."} </strong> {"Visas are at the forefront of that research. Often times the struggle for a visa may shatter your dreams. Or the search for the right e-Visa application might just be a headache. That's why when I started Gibraltr, I wanted to create a painless tool for travelers like myself to better get a hold of tourist visas."}</p>
                    <p className={"w-2/3 md:w-[59%] text-lg text-stone-700 leading-relaxed mb-32"}>{""}</p>
                </div>
            </div>
        <h4 className={supremeBold.className + " text-stone-700 text-4xl mt-14 mb-3.5 font-bold"}>An Open Source Solution for Visas</h4>
        <p className={supremeMedium.className + " w-[90%] md:w-1/2 text-lg text-stone-700 leading-relaxed mb-32"}>{"Open source means transperancy. You can trust our search engine because all the gears that power Gibraltr are in plain sight. Additionally, open source means zero paywalls. We want to directly connect you with the official e-Visa portals of your destinations. Not a single search on Gibraltr will lead you to a corporate payment plan. And lastly, open source means community. You are involved in the development of Gibraltr. We want you to be free to access, contribute and provide feedback to our development on "}<Link href="https://github.com/tachorzy/Gibraltr" className={"underline font-semibold "}>GitHub</Link>.</p>
    </div>
    );
}

export default AboutUsCredits;
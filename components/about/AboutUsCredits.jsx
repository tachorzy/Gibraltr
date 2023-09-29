import localFont from '@next/font/local'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

const supremeMedium = localFont({
    src: '../../fonts/Supreme-Medium.otf',
    weight: '200'
  })

const AboutUsCredits = () => {

    return(
        <div className={"bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center md:pl-32 pl-10"}>
            <h4 className={supremeMedium.className + " text-stone-700 text-4xl mt-14 mb-3.5"} id="our-vision">Our vision</h4>
            <p className={"w-1/2 text-lg text-stone-700 leading-relaxed mb-32"}>{"It's our mission to help you better understand your passport. Our passports are a privilege, each of them with their own freedoms and limits. Entering countries is not easy for all of us. Whether you have a strong or weak passport will greatly shape your travels. We aim to empower all of those yearning to travel. No matter their nation of origin."} </p>
            {/* <p className={AboutStyles.paragraphLast}>We want to simplify the process of finding visa requirements.</p> */}
            <div className={"grid grid-cols-3 gap-x-5"}>
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
                <h3 className={"text-2xl font-bold text-stone-700 pb-1"}>from Tariq Achor Zyad</h3>
                <h3 className={"text-xl font-bold text-stone-500"}>Founder and lead developer of Gibraltr</h3>
            </div>
            <div className={"col-span-2"}>                  
                <h4 className={"text-stone-700 text-4xl mt-14 mb-3.5"}>Made by a traveler for travelers</h4>
                <p className={"w-1/2 text-lg text-stone-700 leading-relaxed mb-4"}><strong>{"Planning a trip doesn't come without copious amounts of research."} </strong> {"That research begins with finding out whether or not you'll need a visa. Often times the struggle for a visa may shatter your dreams. Or the search for the right e-Visa application might just be a headache. That's why when I started Gibraltr, I wanted to create a painless tool for travelers like myself to better get a hold of tourist visas."}</p>
                <p className={"w-1/2 text-lg text-stone-700 leading-relaxed mb-32"}>{""}</p>
            </div>
        </div>

        <h4 className={"text-stone-700 text-4xl mt-14 mb-3.5"}>An Open Source Solution for Visas</h4>
        <p className={"w-1/2 text-lg text-stone-700 leading-relaxed mb-32"}>{"Open source means transperancy. You can trust our search engine because all the gears that power Gibraltr are in plain sight. Additionally, open source means zero paywalls. We want to directly connect you with the official e-Visa portals of your destinations. Not a single search on Gibraltr will lead you to a corporate payment page. And lastly, open source means community. You are involved in the development of Gibraltr. We want you to be free to access, contribute and provide feedback to our code on "}<Link href="https://github.com/tachorzy/Gibraltr" className={"underline font-semibold "}>GitHub</Link>.</p>
    </div>
    );
}

export default AboutUsCredits;
import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import GeneralFAQ from '../components/faq/GeneralFAQ.jsx'
import VisaFAQ from '../components/faq/VisaFAQ.jsx'
import DevFAQ from '../components/faq/DevFAQ.jsx'
import "animate.css"

const supremeMedium = localFont({
  src: '../fonts/Supreme-Medium.otf',
  weight: '200'
})

export default function Home() {
  return (
    <>  
      <Head>
        <title>Gibraltr FAQ</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>

      <main className={"bg-stone-100 bg-opacity-90"}>
          <div className={"sticky"}>
            <NavBar></NavBar>
          </div>
          
          <div className={supremeMedium.className + " bg-[url('/gibraltar-stone-800.svg')] flex flex-row h-[29rem] w-screen bg-stone-800 bg-no-repeat bg-right bg-cover"}>
            <h1 className={"text-stone-200 text-7xl md:pl-32 pl-10 pt-48 md:pt-56"}>Frequently Asked Questions</h1>
          </div>
        
          <div className={supremeMedium.className + " flex-col gap-y-4 mt-14 mb-20"}>
            <section className={"mb-3.5"}>
                <h2 className={"text-stone-700 text-4xl mt-12 md:pl-40 pl-10  mb-6 font-semibold underline"}>General FAQ</h2>
                <GeneralFAQ></GeneralFAQ>
            </section>

            <section className={"mb-3.5"}>
              <h2 className={"text-stone-700 text-4xl mt-12 md:pl-40 pl-10 mb-6 font-semibold underline"} id="visa-faq">Visa FAQ</h2>
              <VisaFAQ></VisaFAQ>    
            </section>

            <section className={"mb-3.5"}>
              <h2 className={"text-stone-700 text-4xl mt-12 md:pl-40 pl-10 mb-6 font-semibold underline"}>Developer FAQ</h2>
                <DevFAQ></DevFAQ>
            </section>
          </div>            
          <Footer></Footer>
      </main>
    </>
  )
}
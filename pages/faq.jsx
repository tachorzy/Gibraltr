import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import { visaFAQContent, generalFAQContent, devFAQContent } from '../utils/faqdata.jsx'
import GeneralFAQ from '../components/faq/GeneralFAQ.jsx'
import "animate.css"

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: '400' 
})

const supremeMedium = localFont({
  src: '../fonts/Supreme-Medium.otf',
  weight: '200'
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: '400'
})

function VisaFAQ(){
  return (
    <div>
        {Array.from(visaFAQContent.entries()).map(([visaFAQQuestion, visaFAQParagraph]) => {
          return(
          <details key={visaFAQQuestion}>
            <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 ml-16 cursor-pointer"}>
            {visaFAQQuestion}
            </summary>
            <div className={"text-stone-700 text-xl ml-24 mb-7 w-1/2 leading-relaxed"}>
              {visaFAQParagraph}
            </div>
          </details>
          )
        })}
    </div>
  );
}

function DevFAQ(){
  return(<div>
    {Array.from(devFAQContent.entries()).map(([devFAQQuestions, devFAQParagraph]) => {
      return(
      <details key={devFAQQuestions}>
        <summary className={"text-stone-700 text-3xl font-semibold mb-3.5 ml-16 cursor-pointer"}>
        {devFAQQuestions}
        </summary>
        <div className={"text-stone-700 text-xl ml-24 mb-7 w-1/2 leading-relaxed"}>
          {devFAQParagraph}
        </div>
      </details>
      )
    })}
  </div>)
}


export default function Home() {
  return (
    <>  
      <Head>
        <title>Gibraltr FAQ</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>

      <main className={"bg-stone-100"}>
          <div className={"sticky"}>
            <NavBar></NavBar>
          </div>
          
          <div className={supremeMedium.className + " bg-[url('/Gibraltar.svg')] flex flex-row h-[29rem] w-screen bg-stone-800 bg-no-repeat bg-right bg-cover"}>
            <h1 className={"text-stone-200 text-7xl md:pl-32 pl-10 pt-48 md:pt-56"}>Frequently Asked Questions</h1>
          </div>
        
          <div className={"flex-col gap-y-4 mt-14 mb-20"}>
            <section className={"mb-3.5"}>
                <h2 className={"text-stone-700 text-4xl mt-12 md:pl-40 pl-10  mb-6 font-semibold underline"}>General FAQ</h2>
                <GeneralFAQ></GeneralFAQ>
            </section>

            <section className={"mb-3.5"}>
              <h2 className={"text-stone-700 text-4xl mt-12 ml-16 mb-6 font-semibold underline"} id="visa-faq">Visa FAQ</h2>
              <VisaFAQ></VisaFAQ>    
            </section>

            <section className={"mb-3.5"}>
              <h2 className={"text-stone-700 text-4xl mt-12 ml-16 mb-6 font-semibold underline"}>Developer FAQ</h2>
                <DevFAQ></DevFAQ>
            </section>
          </div>            
          <Footer></Footer>
      </main>
    </>
  )
}
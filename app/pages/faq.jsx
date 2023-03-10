import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import AboutStyles from '../styles/AboutUsStyle.module.css'
import FAQStyles from '../styles/FAQStyle.module.css'
import { visaFAQContent, generalFAQContent } from '../utils/faqdata.jsx'
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
          <details>
            <summary className={FAQStyles.detailsHeader}>
            {visaFAQQuestion}
            </summary>
            <div className={FAQStyles.detailsText}>
              {visaFAQParagraph}
            </div>
          </details>
          )
        })}
    </div>
  );
}

function GeneralFAQ(){
  return (
    <div>
        {Array.from(generalFAQContent.entries()).map(([generalFAQQuestion, generalFAQParagraph]) => {
          return(
          <details>
            <summary className={FAQStyles.detailsHeader}>
            {generalFAQQuestion}
            </summary>
            <div className={FAQStyles.detailsText}>
              {generalFAQParagraph}
            </div>
          </details>
          )
        })}
    </div>
  );
}

export default function Home() {
  return (
    <>  
      <Head>
        <title>Gibraltr FAQ</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gibraltar-solid.svg" />
      </Head>

      <main className={FAQStyles.main}>
          <div className={styles.navBar}>
                    <NavBar></NavBar>
          </div>
          
          <div className={supremeMedium.className}>
            <div className={FAQStyles.bannerHeader}>
              <h1 className={FAQStyles.title}>Frequently Asked Questions</h1>
            </div>
          
            <div className={FAQStyles.container}>
              <section className={FAQStyles.section}>
                  <h2 className={FAQStyles.subtitle}>General FAQ</h2>
                  <GeneralFAQ></GeneralFAQ>
              </section>

              <section className={FAQStyles.section}>
                <h2 className={FAQStyles.subtitle} id="visa-faq">Visa FAQ</h2>
                <VisaFAQ></VisaFAQ>    
              </section>
          </div>            
          </div>

          <div className={AboutStyles.main}>
            <div className={supremeMedium.className}>

            </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

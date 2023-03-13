import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import SearchBar from '../components/searchbar'
import HomePageInfo from '../components/homepageInfo'
import InfoCard from '../components/infocard'
import Footer from '../components/footer'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import AboutStyles from '../styles/AboutUsStyle.module.css'
import FAQStyles from '../styles/FAQStyle.module.css'
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
            
            <section className={FAQStyles.section}>
              <h2 className={FAQStyles.subtitle}>Visa FAQ</h2>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What is a travel visa?
                </summary>
                <p className={FAQStyles.detailsText}>A travel visa is a document that grants you the ability to enter a country via an authorized port of entry and to stay in that country for a specific length of time. There are different types of visas that serve different purposes. Some are for students, residents, spouses, and tourists. Our search engine connects you with the latest information for <b>tourist visas</b>.</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                Why do you need a visa?
                </summary>
                <p className={FAQStyles.detailsText}>A visa is what allows you entry into another country. Without one, you may be denied entry into your destination. That's why it is crucial to understand the visa requirements of your destination before you book that next trip. </p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What are the different types of visa requirements?
                </summary>
                <p className={FAQStyles.detailsText}>Different countries will demand different requirements based on an traveler's nationality. Some countries may not require you to get a visa at all, in this case they are <b>visa free</b>. Some may require an electronic visa commonly referred to as an <b>e-Visa</b>. Depending on the country, these may also be referred to as electronic travel authorizations. There are also countries that provide a <b>visa on arrival</b> to certain nationalities. In this case, a traveler arrives to their destination's port of entry and purchases a visa. For most of the world however, none of these options are available. No matter your passport, you'll most likely notice some countries that require you to get an <b>embassy visa</b>. In these cases, travelers must visit an embassy or consulate in order to apply for a visa in person.</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                How do you apply for an e-Visa?
                </summary>
                <p className={FAQStyles.detailsText}>An electronic visa, or e-Visa, is an digital alternative to a traditional visa. These are filled out online and ahead of arrival. Generally, travelers apply for their e-Visa through an official website for their destination or through a third party travel agency. These applications involve providing a passport photo, personal information and basic details about your planned visit to the country.</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What is a Schegen visa?
                </summary>
                <p className={FAQStyles.detailsText}>The growing cooperation of European nations has resulted in the success of the Schengen Area — an area encompassing 27 European countries that share open borders. Upon entry into the Schengen Area, your visa to a Schengen member country will also count as a Schengen visa. With this visa, travelers are granted a stay of up to 90 days in a 180-day period, and may freely move within the Schengen area.</p>
              </details>
            </section>

            <section className={FAQStyles.section}>
              <h2 className={FAQStyles.subtitle}>General FAQ</h2>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                How many countries are available on Gibraltr?
                </summary>
                <p className={FAQStyles.detailsText}> test test</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                Do you plan on supporting more nationalities?
                </summary>
                <p className={FAQStyles.detailsText}> test test</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What are the different types of visa requirements?
                </summary>
                <p className={FAQStyles.detailsText}> test test</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What are the different types of visa requirements?
                </summary>
                <p className={FAQStyles.detailsText}> test test</p>
              </details>
              <details>
                <summary className={FAQStyles.detailsHeader}>
                What's a Schegen visa?
                </summary>
                <p className={FAQStyles.detailsText}> test test</p>
              </details>
            </section>
          
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

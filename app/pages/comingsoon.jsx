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

      <main>
          <div className={styles.navBar}>
                    <NavBar></NavBar>
          </div>
          <div className={supremeMedium.className}>
            <div className={FAQStyles.bannerHeader}>
                <h1 className={AboutStyles.title}>Sorry, this page is still underconstruction.</h1>
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

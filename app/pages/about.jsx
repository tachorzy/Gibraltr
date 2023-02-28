import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import SearchBar from '../components/searchbar'
import HomePageInfo from '../components/homepageInfo'
import Footer from '../components/footer'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import AboutStyles from '../styles/AboutUsStyle.module.css'

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
        <title>About Gibraltr</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gibraltar-solid.svg" />
      </Head>

      <main>
          <div className={styles.navBar}>
                    <NavBar></NavBar>
          </div>
          <div className={AboutStyles.main}>
            <div className={supremeMedium.className}>
                <div className="grid grid-rows-5 grid-cols-2 pl-24">
                    <h1 className={AboutStyles.title}>We enable responsible travel.</h1>
                    <h2 className={AboutStyles.subtitle}>Travel at ease</h2>
                    <h3 className={AboutStyles.subtitle}>Wisely plan your trip</h3>
                    <h4 className={AboutStyles.centeredTitle}>Our mission is guiding you through the complexities of tourist visas.</h4>
                </div>
            </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

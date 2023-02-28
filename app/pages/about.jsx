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
          <div className={supremeMedium.className}>
            <div className={AboutStyles.banner}>
                <h1 className={AboutStyles.title}>We enable responsible travel.</h1>
            </div>
          </div>

          <div className={AboutStyles.main}>
            <div className={supremeMedium.className}>
                    <h2 className={AboutStyles. aboutUsTitle}>About us</h2>
                    <p className={AboutStyles.paragraph}>
                      Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power & privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination.
                    </p>
                    {/* <h2 className={AboutStyles.subtitle}>Travel at ease</h2>
                    <h3 className={AboutStyles.subtitle}>Wisely plan your trip</h3>
                    <h4 className={AboutStyles.centeredTitle}>Our mission is guiding you through the complexities of tourist visas.</h4> */}
            </div>
          </div>
          <div className={AboutStyles.bannerLight}></div>
          <div className={AboutStyles.main}>
            <div className={supremeMedium.className}>
                    {/* <h2 className={AboutStyles. aboutUsTitle}>About us</h2>
                    <p className={AboutStyles.paragraph}>
                      Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power & privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination.
                    </p> */}
                    {/* <h2 className={AboutStyles.subtitle}>Travel at ease</h2>
                    <h3 className={AboutStyles.subtitle}>Wisely plan your trip</h3>
                    <h4 className={AboutStyles.centeredTitle}>Our mission is guiding you through the complexities of tourist visas.</h4> */}
            </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

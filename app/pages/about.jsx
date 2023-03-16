import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import InfoCard from '../components/infocard'
import Footer from '../components/footer'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import AboutStyles from '../styles/AboutUsStyle.module.css'
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

export default function AboutUs() {
  return (
    <>  
      <Head>
        <title>About Gibraltr</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
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

          <section className={AboutStyles.main}>
            <span className={supremeMedium.className}>
                <h2 className={AboutStyles.aboutUsTitle}>About us</h2>
                <p className={AboutStyles.paragraphLast}>
                  {"Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power & privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination."}
                </p>
                {/* <h2 className={AboutStyles.subtitle}>Travel at ease</h2>
                <h3 className={AboutStyles.subtitle}>Wisely plan your trip</h3>
                <h4 className={AboutStyles.centeredTitle}>Our mission is guiding you through the complexities of tourist visas.</h4> */}
            </span>
          </section>
          <div className={AboutStyles.bannerLight}>
            <div className={styles.infoCard}>
              <span className={supremeMedium.className}>
                <h2 className={AboutStyles.infoCardTitle}>197+<br/>countries
                </h2>
                <p className={AboutStyles.infoCardText}>Representing every destination.</p>
              </span>
            </div>

            <div className={styles.infoCard}>
              <span className={supremeMedium.className}>
                <h2 className={AboutStyles.infoCardTitle}>197+<br/>passports
                </h2>
                <p className={AboutStyles.infoCardText}>Available for every nationality.</p>
              </span>
            </div>

            <div className={styles.infoCard}>
              <span className={supremeMedium.className}>
                <h2 className={AboutStyles.infoCardTitle}>Over 3000<br/>embassies
                </h2>
                <p className={AboutStyles.infoCardText}>Accesible to all travelers.</p>
              </span>
            </div>

            <div className={styles.infoCard}>
              <span className={supremeMedium.className}>
                <h2 className={AboutStyles.infoCardTitle}>Endless<br/>results
                </h2>
                <p className={AboutStyles.infoCardText}>Remaining reliable and up to date.</p>
              </span>
            </div>

          </div>

          <section className={AboutStyles.main}>
            <span className={supremeMedium.className}>
              <h4 className={AboutStyles.aboutUsTitle} id="our-vision">Our vision</h4>
              <p className={AboutStyles.paragraphLast}>{"It's our mission to help you better understand your passport. Our passports are a privilege, each of them with their own freedoms and limits. Entering countries is not easy for all of us. Whether you have a strong or weak passport will greatly shape your travels. We aim to empower all of those yearning to travel. No matter their nation of origin."} </p>
              {/* <p className={AboutStyles.paragraphLast}>We want to simplify the process of finding visa requirements.</p> */}
                
            </span>
          </section>
          <Footer></Footer>
      </main>
    </>
  )
}

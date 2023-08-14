import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import ErrorStyles from '../styles/ErrorStyle.module.css'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: '400' 
})

const supremeMedium = localFont({
  src: '../fonts/Supreme-Medium.otf',
  weight: '200'
})

export default function ServerError() {
  return (
    <>  
      <Head>
        <title>Server Error</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>

      <main>
          <div className={styles.navBar}>
              <NavBar></NavBar>
          </div>
          <div className={supremeMedium.className}>
            <div className={ErrorStyles.bannerHeader}>
                <h2 className={ErrorStyles.title}>{"Papers Please! You've ventured a page too far."}</h2>
            </div>
          </div>
          <div></div>
          <Footer></Footer>
      </main>
    </>
  )
}

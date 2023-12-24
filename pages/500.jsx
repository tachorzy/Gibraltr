import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'
import ErrorStyles from '../styles/ErrorStyle.module.css'
import { supremeMedium } from '../utils/localNextFonts.js'

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
            <div className={supremeMedium.className + " bg-[url('/error.svg')] flex flex-row w-screen bg-stone-800 bg-no-repeat bg-left-top bg-opacity-90 h-screen "}>
                <h2 className={"text-stone-200 text-7xl pt-56 ml-[27.5rem] w-[50rem]"}>{"Papers Please! You've ventured a page too far."}</h2>
            </div>
          <div></div>
          <Footer></Footer>
      </main>
    </>
  )
}

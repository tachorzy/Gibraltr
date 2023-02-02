import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import SearchBar from '../components/searchbar'
import HomePageInfo from '../components/homepageInfo'
import LowerHomePageInfo from '../components/lowerhomepageinfo'
import { Combo, Roboto, Rubik } from '@next/font/google'
import styles from '../styles/Home.module.css'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: '400' 
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <>  
      <Head>
        <title>Gibraltar</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gibraltar-solid.svg" />
      </Head>

      <main>
          <div className={styles.navBar}>
                    <NavBar></NavBar>
          </div>
          <div className={styles.main}>
            <div className={rubik.className}>
                <div className="grid grid-rows-5 grid-cols-2 pl-24">
                  <h1 className={styles.title}>Keep track of visas<br/>for your next trip.</h1>
                  <SearchBar></SearchBar>
                  <HomePageInfo></HomePageInfo>
                </div>
                <div>
                </div>
            </div>
          </div>
      </main>
    </>
  )
}

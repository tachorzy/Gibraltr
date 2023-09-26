import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import HomePageInfo from '../components/HomePageInfo.jsx'
import Footer from '../components/Footer'
import { Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'
import styles from '../styles/Home.module.css'

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
        <title>{"Unlock Your Passport's Potential"}</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>

      <main>
          <div className={styles.navBar}>
            <NavBar lightingMode="light"></NavBar>
          </div>
          <div className={supremeMedium.className + " bg-stone-100 bg-[url('/passport-stamps.svg')] bg-no-repeat bg-contain bg-opacity-90 bg-right min-h-screen flex flex-col justify-between content-center md:pl-40 pl-10"}>
              <div className="flex flex-col gap-y-2">
                <h1 className={"text-stone-700 mt-[10.5rem] md:lg:xl:mb-6 mb-7 text-4xl md:text-5xl leading-relaxed"}>Keep track of visas<br/>for your next trip.</h1>
                <SearchBar></SearchBar>
                <HomePageInfo></HomePageInfo>
              </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

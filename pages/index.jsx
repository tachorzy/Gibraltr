import Head from 'next/head'
import NavBar from '../components/navbar'
import SearchBar from '../components/searchbar'
import HomePageInfo from '../components/homepageInfo'
import Footer from '../components/footer'
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
            <NavBar></NavBar>
          </div>
          <div className={"bg-stone-100 bg-[url('/passport-stamps.svg')] bg-no-repeat bg-contain bg-opacity-90 bg-right min-h-screen flex flex-col justify-between content-center md:lg:xl:pl-24 pl-10"}>
            <div className={supremeMedium.className}>
                <div className="grid grid-rows-5 grid-cols-2 pl-24">
                  <h1 className={styles.title}>Keep track of visas<br/>for your next trip.</h1>
                  {/* <SearchBar></SearchBar> */}
                  <div></div>
                  <HomePageInfo></HomePageInfo>
                </div>
                <div>
                </div>
            </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

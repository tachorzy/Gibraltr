import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import HomePageInfo from '../components/HomePageInfo.jsx'
import Footer from '../components/Footer'
import { supremeRegular, supremeMedium, supremeBold } from '../utils/localNextFonts.js'

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
          <div className={""}>
            <NavBar lightingMode="light"></NavBar>
          </div>
          <div className={supremeMedium.className + " bg-stone-100 bg-[url('/passport-stamps.svg')] bg-no-repeat bg-contain bg-opacity-90 bg-right min-h-screen flex flex-col justify-between content-center md:pl-40 pl-10 2xl:md-pl-72"}>
              <div className="flex flex-col gap-y-2">
                <h1 className={"text-stone-700 mt-28 md:mt-[10.5rem] md:lg:xl:mb-6 mb-7 text-4xl md:text-5xl 2xl:text-6xl"}>Keep track of visas<br/>for your next trip.</h1>
                <SearchBar></SearchBar>
                <HomePageInfo></HomePageInfo>
              </div>
          </div>
          <Footer></Footer>
      </main>
    </>
  )
}

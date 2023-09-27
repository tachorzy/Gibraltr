import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import AboutUsCredits from '../components/about/AboutUsCredits.jsx'
import { Combo, Roboto, Rubik } from '@next/font/google'
import localFont from '@next/font/local'

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
          <div className={"sticky"}>
              <NavBar lightMode={"dark"}></NavBar>
          </div>
          <div className={supremeMedium.className + " bg-[url('/Gibraltar.svg')] flex flex-row h-[29rem] w-screen bg-stone-800 bg-no-repeat bg-right bg-cover"}>
              <h1 className={"text-stone-200 text-7xl ml-24 pt-56"}>We enable responsible travel.</h1>
          </div>

          <section className={supremeMedium.className + " bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center pl-24"}>
                <h2 className={"text-stone-700 text-4xl mt-14 mb-3.5"}>About us</h2>
                <p className={"w-1/2 text-lg text-stone-700 leading-relaxed mb-32"}>
                  {"Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power & privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination."}
                </p>
          </section>
          <div className={supremeMedium.className + " flex flex-row h-[21rem] w-screen bg-stone-200 py-16 pl-24 gap-x-16 content-center"}>
            <div className={"w-64 h-52 text-stone-700 border-2 border-inherit border-solid rounded-2xl p-4 px-9 pt-9 border-stone-200 bg-stone-100"}>
                <h2 className={"text-4xl text-stone-700"}>197+<br/>countries
                </h2>
                <p className={"text-lg text-stone-700 leading-relaxed mb-32 mt-2.5"}>Representing every destination.</p>
            </div>

            <div className={"w-64 h-52 text-stone-700 border-2 border-inherit border-solid rounded-2xl p-4 px-9 pt-9 border-stone-200 bg-stone-100"}>
                <h2 className={"text-4xl text-stone-700"}>197+<br/>passports
                </h2>
                <p className={"text-lg text-stone-700 leading-relaxed mb-32 mt-2.5"}>Available for every nationality.</p>
            </div>

            <div className={"w-64 h-52 text-stone-700 border-2 border-inherit border-solid rounded-2xl p-4 px-9 pt-9 border-stone-200 bg-stone-100"}>
                <h2 className={"text-4xl text-stone-700"}>Over 3000<br/>embassies
                </h2>
                <p className={"text-lg text-stone-700 leading-relaxed mb-32 mt-2.5"}>Accesible to all travelers.</p>
            </div>

            <div className={"w-64 h-52 text-stone-700 border-2 border-inherit border-solid rounded-2xl p-4 px-9 pt-9 border-stone-200 bg-stone-100"}>
                <h2 className={"text-4xl text-stone-700"}>Endless<br/>results
                </h2>
                <p className={"text-lg text-stone-700 leading-relaxed mb-32 mt-2.5"}>Remaining reliable and up to date.</p>
            </div>

          </div>

          <AboutUsCredits/>
          <Footer/>
      </main>
    </>
  )
}

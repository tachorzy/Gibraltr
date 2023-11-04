import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import InfoCardTray from '../components/about/InfoCardTray.jsx'
import AboutUsCredits from '../components/about/AboutUsCredits.jsx'
import localFont from '@next/font/local'

const supremeMedium = localFont({
  src: '../fonts/Supreme-Medium.otf',
  weight: '200'
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
          <div className={supremeMedium.className + " bg-[url('/gibraltar-stone-800.svg')] flex flex-row h-80 md:h-[29rem] w-screen bg-stone-800 bg-no-repeat max-md:bg-top md:bg-right bg-cover"}>
              <h1 className={"text-stone-200 text-4xl md:text-7xl md:pl-32 pl-10 pt-48 md:pt-56"}>We enable responsible travel.</h1>
          </div>

          <section className={supremeMedium.className + " bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center md:pl-40 pl-10"}>
                <h2 className={"text-stone-700 text-4xl mt-10 md:mt-14 mb-3.5"}>About us</h2>
                <p className={"w-[90%] md:w-1/2 text-base md:text-lg text-stone-700 leading-relaxed mb-32"}>
                  {"Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power & privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination."}
                </p>
          </section>

          <InfoCardTray/>
          <AboutUsCredits/>
          <Footer/>
      </main>
    </>
  )
}

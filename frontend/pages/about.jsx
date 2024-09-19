import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import InfoCardTray from '../components/about/InfoCardTray.jsx'
import AboutUsCredits from '../components/about/AboutUsCredits.jsx'
import PageHead from '../components/PageHead.jsx'
import { supremeRegular, supremeMedium, supremeBold, supremeExtraBold } from '../utils/localNextFonts.js'


export default function AboutUs() {
  return (
    <>  
      <PageHead title={"About Gibraltr"} description={"It's Best to Know Before You Go!"}/>

      <main>
          <div className={"sticky"}>
              <NavBar lightMode={"dark"}></NavBar>
          </div>
          <div className={supremeBold.className + " bg-[url('/gibraltar-stone-800.svg')] flex flex-row h-80 md:h-[29rem] w-screen bg-stone-800 bg-no-repeat max-md:bg-top md:bg-right bg-cover"}>
              <h1 className={"text-stone-200 text-4xl md:text-7xl md:pl-32 pl-10 pt-48 md:pt-56"}>We enable responsible travel.</h1>
          </div>

          <section className={"bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center md:pl-40 pl-10"}>
                <h2 className={supremeBold.className + " text-stone-700 text-4xl mt-10 md:mt-14 mb-3.5"}>Founded to empower</h2>
                <p className={supremeMedium.className + " w-[90%] md:w-1/2 text-base md:text-lg text-stone-700 leading-relaxed mb-32"}>
                  {"Gibraltr was founded with the initiative of making travel visas easier to understand. In our everchanging connected world, travelers are responsible for knowing the power and privilege of their passport. And, you don't have to do it alone! Our search engine provides accurate and reliable visa information for all passport holders no matter their destination."}
                </p>
          </section>

          <InfoCardTray/>
          <section className={"bg-stone-100 bg-no-repeat bg-contain bg-opacity-90 bg-right flex flex-col justify-between content-center md:pl-40 pl-10"}>
            <h4 className={supremeBold.className + " text-stone-700 text-4xl mt-14 mb-3.5 font-bold"} id="our-vision">Our vision</h4>
            <p className={supremeMedium.className + " w-[90%] md:w-1/2 text-base md:text-lg text-stone-700 leading-relaxed mb-32"}>{"It's our mission to help you better understand your passport. Our passports are a privilege, each of them with their own freedoms and limits. Entering countries is not easy for all of us. Whether you have a strong or weak passport will greatly shape your travels. We aim to empower all of those yearning to travel. No matter their nation of origin."} </p>
          </section>
          <AboutUsCredits/>
          <Footer/>
      </main>
    </>
  )
}

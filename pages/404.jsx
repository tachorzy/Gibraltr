import Head from 'next/head'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import "animate.css"
import { supremeMedium } from '../utils/localNextFonts.js'

export default function PageNotFound() {
  return (
    <>  
      <PageHead title={"Page Not Found"} description={"It's Best to Know Before You Go!"}/>

      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="It's Best to Know Before You Go!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Gibraltar-solid.svg" />
      </Head>

      <main>
          <div className={"sticky"}>
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

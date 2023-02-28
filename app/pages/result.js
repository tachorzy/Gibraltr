import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navbar'
import SearchBar from '../components/searchbar'
import { Roboto, Rubik } from '@next/font/google'
import styles from '../styles/result.module.css'
import localFont from '@next/font/local'

const rubik = Rubik({
  subsets: ['latin'],
  weight: '400'
})

const albula = localFont({
    src: '../fonts/serpentype-albula-pro-bold.otf',
    weight: '500'
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
            <div className={albula.className}>
                <div className={styles.gridContainer}>
                    <div className={styles.countryProfileHeader}>
                        <Image src="Casablanca.svg" width={130} height={130} className={styles.PassportImg}></Image>
                        <h1 className={styles.countryProfileTitle}>Morocco</h1>
                    </div>
                    <div className={rubik.className}>
                        <h3 className={styles.visaInfo}>You don't need a visa for Morocco if you have a <b>United States</b> passport</h3>
                    </div>
                </div>
            </div>
          </div>
      </main>
    </>
  )
}

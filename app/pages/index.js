import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/searchbar'
import { Roboto, Montserrat, Rubik, Poppins } from '@next/font/google'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <div className={rubik.className}>
              <div className="grid grid-rows-5 grid-cols-3">
                <h1 className={styles.title}>Keep track of visas<br/>for your next destination.</h1>
                <SearchBar className="absolute left-0"></SearchBar>
              </div>
          </div>
          {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_%28blue_dots%29.svg' width={875} height={546.9}></Image> */}
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/searchbar'
import { Roboto } from '@next/font/google'
import styles from '../styles/Home.module.css'

const roboto = Roboto({ 
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
          <div className={roboto.className}>
              <SearchBar></SearchBar>
          </div>
          {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_%28blue_dots%29.svg' width={875} height={546.9}></Image> */}
      </main>
    </>
  )
}

import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: { timeStamp: string, userAgent: string }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="home page for the demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center} style={inter.style}>
          <h1>Home</h1>
          <h3>
            Here is a normal static page no data fetching
          </h3>
          <br />
          <h3>check other pages from the nav bar</h3>
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import rainbowCowLogo from '../public/img/rainbow-cow-logo.gif'
import rainbowCow from '../public/img/rainbow-cow.png'
import Content from '../content/index.mdx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rainbow Cow</title>
        <meta name="description" content="Rainbow Cow home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          <Image src={rainbowCowLogo} alt="Rainbow Cow Logo" />
        </h1>

        <div className={styles.description}>
          <Content />
        </div>
      </main>
    </div>
  )
}

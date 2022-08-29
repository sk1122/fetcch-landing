import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Hero, Social, Footer } from "../components/"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Fetcch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-black flex w-full h-full flex-1 flex-col items-center justify-start px-20 text-center">
        <video autoPlay muted loop id="myVideo">
          <source src="/bg.webm" type="video/webm" />
        </video>
        <Header />
        <Hero />
        <div className='absolute right-5 bottom-20'>
          <Social />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

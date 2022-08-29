import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header, Hero } from "../components/"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Fetcch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black flex w-full h-full flex-1 flex-col items-center justify-start px-20 text-center">
        <Header />
        <Hero />
      </main>
    </div>
  )
}

export default Home

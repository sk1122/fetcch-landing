import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Header, Hero, Social, Footer, Form } from "../components/"

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false)

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
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className='absolute right-5 bottom-20'>
          <Social />
        </div>
        <Form isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <Footer />

    </div>
  )
}

export default Home

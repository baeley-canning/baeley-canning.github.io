import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { useState } from 'react'
import deved from '../public/side-eye-sketch.gif'

import Image from 'next/image'
import VID1 from '../public/VID1.gif'
import VID2 from '../public/VID2.gif'
import HTML from '../public/HTML.svg'
import CSS from '../public/CSS.svg'
import TAILWIND from '../public/TAILWIND.svg'
import JAVASCRIPT from '../public/JAVASCRIPT.svg'
import TYPESCRIPT from '../public/TYPESCRIPT.svg'
import REACT from '../public/REACT.svg'
import REDUX from '../public/REDUX.svg'
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>BC Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-medium text-xl">Baeley Canning</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Baeley Canning
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              As a recent graduate in software development, I am eager to apply
              my knowledge and skills to contribute to a dynamic and innovative
              team. I am a quick learner with a passion for programming and a
              strong foundation in software development concepts.{' '}
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <button class="hover:animate-spin-once">
                <a
                  href="https://www.linkedin.com/in/baeley-canning/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </button>

              <button class="hover:animate-spin-once">
                <a
                  href="https://github.com/baeley-canning"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </button>
              <button class="hover:animate-spin-once">
                <a
                  href="/BaeleyCanning-04-23.pdf"
                  target="_blank"
                  download
                  rel="noopener"
                >
                  <AiFillFilePdf />
                </a>
              </button>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="inherit" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={HTML}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={CSS}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={TAILWIND}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={JAVASCRIPT}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={TYPESCRIPT}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={REACT}
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={REDUX}
              />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my developmental journey, I've been able to create a
              plethora of projects that I hold dear to my heart, and I'd love to
              share them with you.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'75%'}
                height={'50%'}
                layout="responsive"
                src={VID1}
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'75%'}
                height={'50%'}
                layout="responsive"
                src={VID2}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

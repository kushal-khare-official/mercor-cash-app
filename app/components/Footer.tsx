'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import PlayStore from '../assets/images/play-store.svg'
import AppStore from '../assets/images/app-store.svg'
import Twitch from '../assets/images/twitch.svg'
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'

const debounce = (callback: Function) => {
  let frame: number

  return (...params: any) => {
    if (frame) cancelAnimationFrame(frame)

    frame = requestAnimationFrame(() => callback(...params))
  }
}

export default function Footer() {
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY.toString()
  }

  useEffect(() => {
    document.addEventListener('scroll', debounce(storeScroll), {
      passive: true,
    })

    storeScroll()
  }, [])

  return (
    <footer className="w-full fixed z-30 bottom-0 left-0 mx-auto py-5 px-10 md:px-24 inline-flex flex-wrap justify-between gap-2 text-grey">
      <div className="basis-full md:basis-6/12 inline-flex gap-4 justify-between md:justify-start items-center">
        <button className="flex justify-between items-center gap-2 py-3 px-2 rounded-md text-sm md:text-lg tracking-wide bg-black border border-solid border-white text-white">
          <AppStore />
          APP STORE
        </button>
        <button className="flex justify-between items-center gap-2 py-3 px-2 rounded-md text-sm md:text-lg tracking-wide bg-black border border-solid border-white text-white">
          <PlayStore />
          GOOGLE PLAY
        </button>
      </div>
      <div className="hidden md:block basis-7/12 md:basis-4/12 ps-10">
        <p className="font-bold text-[10px] tracking-[0] leading-[13px]">
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC.{' '}
          <br />
          See our BrokerCheck. Investing involves risk; you may lose money.
          Bitcoin trading offered by Cash App. Cash App Investing does not trade
          bitcoin and Cash App is not a member of FINRA or SIPC. Cash App
          facilitates banking services through Sutton Bank and Lincoln Savings
          Bank, Members FDIC.
        </p>
      </div>
      <div className="hidden md:flex social basis-4/12 md:basis-1/12 justify-center items-center gap-[32px] text-white">
        <Twitch height={30} width={30} />
        <Twitter height={30} width={30} />
        <Instagram height={30} width={30} />
      </div>
    </footer>
  )
}

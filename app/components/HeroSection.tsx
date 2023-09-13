import Image from 'next/image'
import Phone from '../assets/images/intro-phone 1.png'
import Cube from '../assets/images/intro-cube 1.png'
import Cubes from '../assets/images/intro-cubes 1.png'
import Pillar from '../assets/images/intro-pillar 1.png'
import Stairs from '../assets/images/intro-stairs 1.png'
import DownArrow from '../assets/images/down-arrow.svg?url'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-black bg-hero-pattern bg-no-repeat bg-center bg-cover h-screen overflow-hidden font-extrabold text-white text-[30vw] md:text-[193px] text-center tracking-[0.5px] leading-[166px]">
      <h1 className="absolute w-full z-[3] top-[27%]">CASH</h1>
      <Image
        className="absolute z-[4] inset-y-1/2 inset-x-1/2 translate-y-[-50%] translate-x-[-50%] object-cover"
        alt="Intro phone"
        src={Phone}
        height={453}
      />
      <h1 className="absolute w-full z-[5] top-[28%]">
        <br />
        APP
      </h1>
      <Image
        className="absolute top-[9%] left-[20%] z-[2] object-cover"
        alt="Intro cube"
        src={Cube}
        height={74}
      />
      <Image
        className="absolute bottom-[8%] left-[20%] z-[2] object-cover"
        alt="Intro cubes"
        src={Cubes}
        height={176}
      />
      <Image
        className="absolute top-[19%] right-[14%] z-[2] object-cover"
        alt="Intro stairs"
        src={Stairs}
        height={261}
      />
      <Image
        className="absolute bottom-0 right-[15%] z-[2] object-cover"
        alt="Intro pillar"
        src={Pillar}
        height={245}
      />
      <Link
        className="absolute z-50 z-6 h-[35px] w-[35px] bottom-[30px] inset-x-1/2 translate-x-[-50%]"
        href="#Payments"
      >
        <Image alt="Down Arrow" src={DownArrow} height={35} />
      </Link>
    </section>
  )
}

import Image from 'next/image'
import Phone from '../assets/images/intro-phone 1.png'
import Cube from '../assets/images/intro-cube 1.png'
import Cubes from '../assets/images/intro-cubes 1.png'
import Pillar from '../assets/images/intro-pillar 1.png'
import Stairs from '../assets/images/intro-stairs 1.png'
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
        priority={true}
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
        <svg
          width="18"
          height="30"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.69361 29.6495L17.7513 20.4362C18.121 20.0137 18.0726 19.3748 17.6455 19.0109C17.2178 18.6456 16.5717 18.6921 16.202 19.1147L10.0265 26.1768V1.01089C10.0265 0.452881 9.56877 0 9.00321 0C8.43765 0 7.97988 0.452881 7.97988 1.01089V26.4308L4.34299 22.4055L1.82561 19.2609C1.47495 18.8235 0.831623 18.7487 0.388182 19.0951C0.133032 19.2946 0 19.5905 0 19.889C0 20.1087 0.0716343 20.3298 0.221039 20.5158L2.77798 23.7055L8.15658 29.6617C8.35237 29.8787 8.63345 30.002 8.92817 30C9.2222 29.9973 9.50123 29.8706 9.69361 29.6495Z"
            fill="#00D54B"
          />
        </svg>
      </Link>
    </section>
  )
}

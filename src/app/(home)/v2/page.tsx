import clsx from 'clsx'

import { chivo, encode_sans, ibm_plex_serif } from '../../ui/fonts'
import styles from './page.module.scss'
import AboutMeSection from '@/app/components/sections/about-me'
import HeroSection from '@/app/components/sections/hero'
import DividerSection from '@/app/components/sections/divider'
import ServicesSection from '@/app/components/sections/services'
import Footer from '@/app/components/footer'

export default function Home() {
  return (
    <div className={ clsx(chivo.variable, encode_sans.variable, ibm_plex_serif.variable) }>
      {/* <div className={styles.Hero_backgroundImage}>
        <Image
          fill={true}
          priority={true}
          alt={'Profile Picture'}
          src={'/images/hero-section.jpg'}
        />
      </div> */}
      <header></header>

      <main>
        <HeroSection />

        <DividerSection />

        <ServicesSection />

        <DividerSection />

        <AboutMeSection />
        
        <DividerSection />
      </main>
      

      <Footer />
    </div>
  )
}

import clsx from 'clsx'

import { chivo, encode_sans, ibm_plex_serif } from '@/app/ui/fonts'
import DividerSection from '@/app/components/sections/divider'
import HeroSection from '@/app/components/sections/hero'
import ContactSection from './components/sections/contact'
import AboutMeSection from '@/app/components/sections/about-me'
import Footer from '@/app/components/footer'

export default async function Home() {
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

        {/* <DividerSection /> */}

        <ContactSection />

        {/* <DividerSection /> */}

        <AboutMeSection />
        
        {/* <DividerSection /> */}
      </main>
      

      <Footer />
    </div>
  )
}

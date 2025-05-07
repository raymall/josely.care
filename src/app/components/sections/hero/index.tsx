import Link from 'next/link'
import { WhatsappIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'
import DividerSection from '@/app/components/sections/divider'
import ServicesSection from '@/app/components/sections/services'

export default function HeroSection() {
  return (
    <section className={styles.Hero}>
      <div className={styles.Hero_content}>
        <div className={styles.Hero_info}>
          <h1 className={styles.Hero_title}>
            <span>Los seguros </span>
            <span className={styles.Hero_title__highlight}>no </span> <br/>
            <span>son complicados. </span>
          </h1>
          <Link
            className={styles.Hero_button}
            href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito información sobre seguros.')}`}
          >
            Quiero saber más
            <WhatsappIcon className={styles.Hero_button_icon} />
          </Link>
        </div>
      </div>

      <DividerSection />

      <ServicesSection />
    </section>
  )
}
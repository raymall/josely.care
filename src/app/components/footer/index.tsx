'use client'

import { InstagramIcon, LinkedinIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_content}>
        <div>
          <h2 className={styles.Footer_title}>Sígueme</h2>
          <nav className={styles.Footer_social}>
            <a
              href="https://instagram.com/josely.care"
              target={'_blank'}
              className={styles.Footer_social_link}
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/joselymendezcatano/"
              target={'_blank'}
              className={styles.Footer_social_link}
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
            {/* <a
              href="/files/contact-card.vcf"
              target={'_blank'}
              className={styles.Footer_social_link}
            >
              <AddContactIcon />
              <span>Agrégame a tus contactos</span>
            </a> */}
          </nav>
        </div>
        <div>
          <h2 className={styles.Footer_title}>Aliados</h2>
          <nav className={styles.Footer_allies}>
            <a
              target='_blank'
              href="https://www.instagram.com/grupomonterotorres/"
            >
              <Image
                src="/images/logo-grupo-montero-torres.svg"
                alt="Grupo Montero Torres Logo"
                width={200}
                height={50}
              />
            </a>
            {/* <a
              target='_blank'
              href="https://www.instagram.com/grupomonterotorres/"
            >
              <LogoGrupoMonteroTorres />
            </a> */}
          </nav>
        </div>
      </div>
      <small>
        © {new Date().getFullYear()} Josely Méndez Catano, Asesora de Seguros.<br />
        Todos los derechos reservados.
      </small>
    </footer>
  )
}
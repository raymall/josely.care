'use client'

import AddContactButton from "../components/buttons/add-contact"
import WhatsAppMessageButton from "../components/buttons/whatsapp-message"
import EmailButton from "../components/buttons/email"
import ScheduleButton from "../components/buttons/schedule"
import CallButton from "../components/buttons/call"
import LinkedinButton from "../components/buttons/linkedin"

import clsx from "clsx"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import profilePicture from "../../../public/images/profile-picture-v2.jpg"
import { HealthIcon, LifeIcon } from "../ui/icons"
import { work_sans, fira_sans, chivo } from "../ui/fonts"
import styles from "./page.module.scss"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <main className={ clsx(work_sans.variable, fira_sans.variable, chivo.variable, styles.Main) }>
      <section className={styles.Header}>
        <div className={styles.Header_profile}>
          <Image
            className={styles.Header_profilePicture }
            src={profilePicture}
            alt='Josely Méndez Catano'
            width={200}
            height={200}
            placeholder='blur'
            quality={100}
          />
        </div>
        <h1 className={styles.Header_title}>
          Josely Méndez Catano
        </h1>
        <span className={styles.Header_subtitle}>
          Asesora de Seguros
        </span>
        <span className={styles.Header_company}>
          Grupo Montero Torres
        </span>
        <div className={styles.Header_buttons}>
          <WhatsAppMessageButton minimal={true} />
          <ScheduleButton minimal={true} />
          <EmailButton minimal={true} />
          <CallButton minimal={true} />
        </div>
      </section>

      <section className={styles.AboutMe}>
        <button
          className={styles.AboutMe_button}
          onClick={handleClick}
        >
          <h2 className={styles.AboutMe_title}>Conoce un poco de mí</h2>
        </button>
        <div aria-hidden={!isOpen} className={styles.AboutMe_panel}>
          <p>
            Hola, soy Josely María del Pilar Méndez Catano, (sí, 3 nombres) pero me puedes decir <strong><i>Josely</i></strong> o <strong><i>Jos</i></strong>.
          </p>
          <p>
            Soy licenciada en administración de empresas y tengo un posgrado en Gestión Humana.
          </p>  
          <p>
            Cuento con <strong><i>más de 10 años de experiencia</i></strong> en el sector asegurador; he desempeñando varias funciones destacando la de gerente regional de servicios en una de las empresas de seguros más importantes de República Dominicana.
          </p>  
          <p>
            Mis conocimientos están relacionados a toda la experiencia de servicios, desde la venta y posventa de seguros de salud local e internacional, así como seguros de vida y riesgos generales.
          </p>  
          <p>
            <strong><i>Servir es una de mis grandes pasiones</i></strong> y es por esto que me encantaría acompañarte a encontrar la mejor cobertura que realmente se adapte a ti.
          </p>
        </div>
        <button
        className={styles.AboutMe_read}
          onClick={handleClick}
        >
          {isOpen ? 'Leer menos' : 'Leer más'}
        </button>
      </section>

      <section className={styles.Options}>
        <h2 className={styles.Options_title}>¿Cuál es tu interés?</h2>
        <div className={styles.Options_buttons}>
          <Link
            className={styles.Options_button}
            href='/health'
            target="_self"
          >
            <HealthIcon />
            <span>Salud</span>
          </Link>
          <Link
            className={styles.Options_button}
            href='/life'
            target="_self"
          >
            <LifeIcon />
            <span>Vida</span>
          </Link>
        </div>
      </section>

      <section className={styles.Action}>
        <h2 className={styles.Action_title}>Contáctame</h2>
        <div className={styles.Action_buttons}>
          <WhatsAppMessageButton />
          <AddContactButton />
          <EmailButton />
          <ScheduleButton />
          <CallButton />
        </div>
      </section>

      <section className={styles.Social}>
        <h2 className={styles.Social_title}>Sígueme</h2>
        <LinkedinButton />
      </section>
    </main>
  )
}

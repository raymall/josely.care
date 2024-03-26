import AddContactButton from "../components/buttons/add-contact"
import WhatsAppMessageButton from "../components/buttons/whatsapp-message"
import EmailButton from "../components/buttons/email"
import ScheduleButton from "../components/buttons/schedule"
import CallButton from "../components/buttons/call"
import LinkedinButton from "../components/buttons/linkedin"

import clsx from "clsx"
import Image from "next/image"

import profilePicture from "../../../public/images/profile-picture.jpg"
import { work_sans, fira_sans, chivo } from "../ui/fonts"
import styles from "./page.module.scss"

export default function Home() {
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
      </section>

      <section className={styles.Action}>
        <h2 className={styles.Action_title}>Contáctame</h2>
        <div className={styles.Action_buttons}>
          <AddContactButton />
          <WhatsAppMessageButton />
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

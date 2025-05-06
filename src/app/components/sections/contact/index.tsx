import styles from './styles.module.scss'

export default function ContactSection() {
  return (
    <section className={styles.Contact}>
      <small className={styles.Contact_caption}>Otras Vías de Contacto</small>
      <div className={styles.Contact_content}>
        <div className={styles.Contact_column}>
          <p className={styles.Contact_title}>
            <span>Agenda una cita </span>
            <a
              href="https://calendly.com/joselyseguros/asesoria"
              className={styles.Contact_title__highlight}
            >
              virtual.
            </a>
          </p>
        </div>
        <div className={styles.Contact_column}>
          <p className={styles.Contact_title}>
            <span>Hazme una </span>
            <a
              href="tel:+1(829)645-2301"
              className={styles.Contact_title__highlight}
            >
              llamada.
            </a>
          </p>
        </div>
        <div className={styles.Contact_column}>
          <p className={styles.Contact_title}>
            <span>Mándame un </span>
            <a
              href="mailto:joselymendez.seguros@gmail.com"
              className={styles.Contact_title__highlight}
            >
              correo.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
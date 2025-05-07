import Image from 'next/image'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function AboutMeSection() {
  return (
    <section className={styles.AboutMe}>
      <div className={styles.AboutMe_content}>
        <div className={styles.AboutMe_info}>
          <small className={styles.AboutMe_caption}>Sobre Mí</small>
          <h2 className={styles.AboutMe_title}>
            <span>¡Hola! soy </span>
            <span className={styles.AboutMe_title__highlight}>Josely Méndez Catano</span>
          </h2>
          <div className={clsx(styles.AboutMe_mainImage, styles.AboutMe_mainImage__narrow)}>
            <figure>
              <Image
                fill={true}
                priority={true}
                alt={'Profile Picture'}
                src={'/images/hero-section.jpg'}
              />
            </figure>
          </div>
          <p>
            Soy Licenciada en Administración de Empresas con un Posgrado en Gestión de los Recursos Humanos.
          </p>

          <p>
            Me acompañan 15 años de experiencia en el sector asegurador, siendo mi escuela primaria una de las empresas de seguros más destacadas de la República Dominicana.
          </p>

          <p>
            El enfoque principal de mi carrera laboral ha sido lo más importante que tiene todo negocio: el cliente. Ese cliente como tú, como yo, como todos.
          </p>

          <p>
            Amo servir y quien me conoce puede confirmar que es <strong>una de mis grandes pasiones</strong>.
          </p>

          <p>
            Es por esto que quiero acompañarte en el proceso de encontrar la cobertura de seguro que mejor se adapte a ti y a los tuyos de una manera práctica, sin complicaciones.
          </p>

          <p>
            Porque los seguros no tienen que ser complicados, <strong>permíteme mostrarte</strong>.
          </p>
        </div>
        <div className={styles.AboutMe_mainImage}>
          <figure>
            <Image
              fill={true}
              priority={true}
              alt={'Profile Picture'}
              src={'/images/hero-section.jpg'}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { HealthIcon, LifeIcon } from '@/app/ui/icons'

export default function ServicesSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)

  const handleAccordionClick = (accordionId: number) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId)
  }

  const handleKeyDown = (e: React.KeyboardEvent, accordionId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAccordionClick(accordionId)
    }
  }

  return (
    <section className={styles.Services}>
      <small className={styles.Services_caption}>Hablemos de</small>
      <h2 id="services-title" className={styles.Services_title}>
        <span className={styles.Services_title__highlight}>Asesoría </span>
        <span>a tu medida</span>
      </h2>
      <div className={styles.Services_content}>
        <div className={styles.Services_accordion}>
          <div className={clsx(styles.Services_accordion_item, openAccordion === 1 ? styles.Services_accordion_item__active : null)}>
            <button
              id="accordion-1"
              className={clsx(styles.Services_accordion_button, openAccordion === 1 ? styles.Services_accordion_button__active : null)}
              type="button"
              aria-expanded={openAccordion === 1}
              aria-controls="accordion-panel-1"
              onClick={() => handleAccordionClick(1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
            >
              <span>
                Salud
              </span>
            </button>
            <div
              id="accordion-panel-1"
              className={clsx(styles.Services_accordion_panel, openAccordion === 1 ? styles.Services_accordion_panel__open : null)}
              aria-labelledby="accordion-1"
              hidden={openAccordion !== 1}
            >
              {/* <p>
                Tu salud es prioridad, y contar con una buena cobertura te brinda acceso a atención oportuna y de calidad. Estoy aquí para ayudarte a elegir un seguro que te acompañe en cada etapa, sin complicaciones.
              </p> */}
              <div className={styles.Services_actions}>
                {/* <small className={styles.Services_caption}>Más información</small> */}
                <div className={styles.Services_buttons}>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito un seguro de salud')}`}
                    className={styles.Services_button}
                  >
                    Necesito un seguro
                  </a>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, quiero mejorar mi cobertura')}`}
                    className={styles.Services_button}
                  >
                    Quiero mejorar mi cobertura
                  </a>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito cobertura internacional')}`}
                    className={styles.Services_button}
                  >
                    Cobertura internacional
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.Services_accordion_item, openAccordion === 2 ? styles.Services_accordion_item__active : null)}>
            <button
              id="accordion-2"
              className={clsx(styles.Services_accordion_button, openAccordion === 2 ? styles.Services_accordion_button__active : null)}
              type="button"
              aria-expanded={openAccordion === 2}
              aria-controls="accordion-panel-2"
              onClick={() => handleAccordionClick(2)}
              onKeyDown={(e) => handleKeyDown(e, 2)}
            >
              <span>
                Vida
              </span>
            </button>
            <div
              id="accordion-panel-2"
              className={clsx(styles.Services_accordion_panel, openAccordion === 2 ? styles.Services_accordion_panel__open : null)}
              aria-labelledby="accordion-2"
              hidden={openAccordion !== 2}
            >
              <div className={styles.Services_actions}>
                <div className={styles.Services_buttons}>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito información sobre los seguros de vida.')}`}
                    className={styles.Services_button}
                  >
                    Necesito un seguro de vida
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles.Services_accordion_item, openAccordion === 3 ? styles.Services_accordion_item__active : null)}>
            <button
              id="accordion-3"
              className={clsx(styles.Services_accordion_button, openAccordion === 3 ? styles.Services_accordion_button__active : null)}
              type="button"
              aria-expanded={openAccordion === 3}
              aria-controls="accordion-panel-3"
              onClick={() => handleAccordionClick(3)}
              onKeyDown={(e) => handleKeyDown(e, 3)}
            >
              <span>Riesgos</span>
            </button>
            <div
              id="accordion-panel-3"
              className={clsx(styles.Services_accordion_panel, openAccordion === 3 ? styles.Services_accordion_panel__open : null)}
              aria-labelledby="accordion-3"
              hidden={openAccordion !== 3}
            >
              <p>
                Tu hogar, tu negocio y tus bienes merecen estar protegidos. Un seguro de riesgos te ayuda a enfrentar imprevistos con mayor tranquilidad. Juntos encontraremos la cobertura ideal para ti.
              </p>
              <div className={styles.Services_actions}>
                <small className={styles.Services_caption}>Más información</small>
                <div className={styles.Services_buttons}>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito un seguro de auto')}`}
                    className={styles.Services_button}
                  >
                    Auto
                  </a>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito un seguro de vivienda')}`}
                    className={styles.Services_button}
                  >
                    Vivienda
                  </a>
                  <a
                    href={`https://wa.me/18296452301?text=${encodeURIComponent('Hola Josely, necesito un seguro para mi negocio')}`}
                    className={styles.Services_button}
                  >
                    Negocio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
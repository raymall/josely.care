'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1)

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId)
  }

  const handleKeyDown = (e: React.KeyboardEvent, tabId: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTabClick(tabId)
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
        <div role="tablist" aria-labelledby="services-title" className={styles.Services_tabs}>
          <button
            id="tab-1"
            className={clsx(styles.Services_tab, activeTab === 1 ? styles.Services_tab__active : null)}
            type="button"
            role="tab"
            aria-selected={activeTab === 1}
            aria-controls="tabpanel-1"
            onClick={() => handleTabClick(1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            tabIndex={activeTab === 1 ? 0 : -1}
          >
            <span>Salud</span>
          </button>
          <button
            id="tab-2"
            className={clsx(styles.Services_tab, activeTab === 2 ? styles.Services_tab__active : null)}
            type="button"
            role="tab"
            aria-selected={activeTab === 2}
            aria-controls="tabpanel-2"
            onClick={() => handleTabClick(2)}
            onKeyDown={(e) => handleKeyDown(e, 2)}
            tabIndex={activeTab === 2 ? 0 : -1}
          >
            <span>Vida</span>
          </button>
          <button
            id="tab-3"
            className={clsx(styles.Services_tab, activeTab === 3 ? styles.Services_tab__active : null)}
            type="button"
            role="tab"
            aria-selected={activeTab === 3}
            aria-controls="tabpanel-3"
            onClick={() => handleTabClick(3)}
            onKeyDown={(e) => handleKeyDown(e, 3)}
            tabIndex={activeTab === 3 ? 0 : -1}
          >
            <span>Riesgos</span>
          </button>
        </div>

        <div
          className={styles.Services_tab_panel}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby="tab-1"
          hidden={activeTab !== 1}
        >
          {/* <p>Tu salud es prioridad, y contar con una buena cobertura te brinda acceso a atención oportuna y de calidad. Estoy aquí para ayudarte a elegir un seguro que te acompañe en cada etapa, sin complicaciones.</p> */}
          {/* <p>Cuidar de nuestra salud es una inversión en bienestar, tranquilidad y calidad de vida. Un seguro de salud no solo te protege frente a imprevistos médicos, sino que también te brinda acceso a una red de servicios, profesionales y centros de atención que responden cuando más lo necesitas.</p>
          <p>Quiero ayudarte a elegir una cobertura que se adapte a tus necesidades y a las de tu familia, para que te sientas respaldado ante cualquier eventualidad. Porque tu salud no puede esperar, y tampoco debería complicarse el proceso de protegerla.</p> */}
          <div className={styles.Services_actions}>
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
        <div
          className={styles.Services_tab_panel}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby="tab-2"
          hidden={activeTab !== 2}
        >
          {/* <p>Proteger a los que amas también es una forma de amar. Un seguro de vida te permite garantizar estabilidad y respaldo para tu familia cuando tú no estés. Te acompaño a elegir el plan adecuado.</p> */}
          {/* <p>El seguro de vida es un acto de amor y responsabilidad. Es una herramienta que permite dejar protegidos a los que más queremos, asegurando estabilidad y respaldo en los momentos más difíciles.</p>
          <p>Mi propósito es acompañarte a elegir una póliza que hable por ti cuando ya no puedas hacerlo. Que transmita cuidado, previsión y compromiso hacia tu familia. Porque la vida es incierta, pero tu tranquilidad y la de los tuyos no tiene por qué serlo.</p> */}
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
        <div
          className={styles.Services_tab_panel}
          role="tabpanel"
          tabIndex={0}
          aria-labelledby="tab-3"
          hidden={activeTab !== 3}
        >
          {/* <p>Tu hogar, tu negocio y tus bienes merecen estar protegidos. Un seguro de riesgos te ayuda a enfrentar imprevistos con mayor tranquilidad. Juntos encontraremos la cobertura ideal para ti.</p> */}
          {/* <p>Vivimos rodeados de riesgos que muchas veces no podemos evitar, pero sí podemos anticipar. El seguro de riesgos generales protege tus bienes, tu patrimonio y tu tranquilidad frente a situaciones como robos, accidentes, incendios y más.</p>
          <p>Estoy aquí para ayudarte a identificar esas áreas vulnerables y convertirlas en fortalezas, con una cobertura que se adapte a tu realidad. Porque cuando sabes que estás protegido, todo fluye con más confianza.</p> */}
          <div className={styles.Services_actions}>
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
    </section>
  )
}
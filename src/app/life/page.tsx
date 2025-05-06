'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

import { work_sans, fira_sans, chivo } from '../ui/fonts'
import { ArrowDownIcon, WhatsappIcon } from '../ui/icons'
import styles from './page.module.scss'

export default function HealthPage() {

  const encodeString = (str: string) => {
    return encodeURIComponent(str)
  }

  const openWindow = (msg: string) => {
    window.open(`https://wa.me/18296452301?text=${encodeString(msg)}`)
  }

  const Button = ({label, message, description}: {label: string, message: string, description: string}) => {
    return (
      <button
        onClick={() => {
          openWindow(message)
        }}
      >
        <div>
          {label}
          <span>{description}</span>        
        </div>  
        <ArrowDownIcon />
      </button>
    )
  }

  const lifeInsurance = [
    {
      label: 'Seguro de vida',
      description: 'Tu colchón protector para garantizarle a tus seres más queridos la continuidad financiera, que determines, en caso de que te ocurra algún imprevisto sin solución.',
      message: 'Hola Josely! Me interesa un seguro de vida. Me gustaría que me asesores.'
    },
    {
      label: 'Seguro de vida con ahorro',
      description: 'Protege a tus seres más queridos de por vida y a la vez, genera inversión. Esta opción de cobertura te permite generar intereses a tu favor, por cada pago de prima realizado, aumentando a la vez tu valor asegurado.',
      message: 'Hola Josely! Me gustaría saber más sobre los seguros de vida con ahorro.'
    },
    {
      label: 'Seguro de vida con devolución de prima',
      description: 'Protege a tus seres queridos durante el tiempo que decidas. Al final del período contratado, si no se hizo pago a los beneficiarios, como titular, recibes la prima total pagada menos impuestos.',
      message: 'Hola Josely! Quisiera conocer más sobre los seguros de vida con devolución de prima.'
    },
    {
      label: ' Seguro de vida como requisito para préstamos',
      description: 'Protege a tus seres queridos para evitarles asumir la deuda de tu financiamiento.',
      message: 'Hola Josely! Estoy interesado en un seguro de vida como requisito para préstamos.'
    }
  ]

  return (
    <main className={ clsx(work_sans.variable, fira_sans.variable, chivo.variable, styles.Main) }>
      <h1 className={styles.Main_title}>Vida</h1>
      <section className={styles.Action}>
        <div className={styles.Action_buttons}>
          {
            lifeInsurance.map(option => (
              <Button
                key={option.label}
                label={option.label}
                description={option.description}
                message={option.message}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}
'use client'

import clsx from "clsx"
import Link from "next/link"
import { useState } from "react"

import { work_sans, fira_sans, chivo } from "../ui/fonts"
import { ArrowDownIcon, WhatsappIcon } from "../ui/icons"
import styles from "./page.module.scss"

export default function HealthPage() {

  const encodeString = (str: string) => {
    return encodeURIComponent(str)
  }

  const openWindow = (msg: string) => {
    window.open(`https://wa.me/18296452301?text=${encodeString(msg)}`)
  }

  const Button = ({label, message}: {label: string, message: string}) => {
    return (
      <button
        onClick={() => {
          openWindow(message)
        }}
      >
        {label}
        <ArrowDownIcon />
      </button>
    )
  }

  const personalHealthInsurance = [
    {
      label: 'Necesito un seguro',
      message: 'Hola Josely! Necesito un seguro de salud. Me gustaría que me asesores.'
    },
    {
      label: 'Quiero mejorar mi cobertura',
      message: 'Hola Josely! Mi seguro actual no me es suficiente, quisiera que me asesores con una mejor opción.'
    },
    {
      label: 'Cobertura internacional',
      message: 'Hola Josely! Me gustaría saber sobre las opciones de seguros de salud internacionales.'
    },
    {
      label: 'Cobertura para emergencias y hospitalización',
      message: 'Hola Josely! Me gustaría tener una cobertura para emergencias y hospitalización.'
    },
    {
      label: 'Cobertura para casos médicos de envergadura o significativos',
      message: 'Hola Josely! Quisiera tener una cobertura para casos médicos de envergadura o significativos.'
    },
    {
      label: 'Otros',
      message: 'Hola Josely! Quisiera que me asesores sobre los diferentes productos que ofreces de seguros.'
    }
  ]

  const businessHealthInsurance = [
    {
      label: 'Necesito un seguro de salud para mi empresa',
      message: 'Hola Josely! Necesito un seguro de salud para mi empresa. Me gustaría que me asesores.'
    },
    {
      label: 'Mejor cobertura para mis empleados',
      message: 'Hola Josely! Estoy buscando una mejor cobertura para mis empleados. Me gustaría que me asesores.'
    },
    {
      label: 'Explorar otras opciones',
      message: 'Hola Josely! Quisiera que me asesores sobre los diferentes productos que ofreces de seguros.'
    },
  ]

  return (
    <main className={ clsx(work_sans.variable, fira_sans.variable, chivo.variable, styles.Main) }>
      <h1 className={styles.Main_title}>Salud</h1>
      <span className={styles.Main_subtitle}>Local e Internacional</span>
      <section className={styles.Action}>
        <h2 className={styles.Action_title}>Individual/Familiar</h2>
        <div className={styles.Action_buttons}>
          {
            personalHealthInsurance.map(option => (
              <Button
                key={option.label}
                label={option.label}
                message={option.message}
              />
            ))
          }
        </div>

        <h2 className={styles.Action_title}>Empresarial</h2>
        <div className={styles.Action_buttons}>
          {
            businessHealthInsurance.map(option => (
              <Button
                key={option.label}
                label={option.label}
                message={option.message}
              />
            ))
          }
        </div>
      </section>
    </main>
  )
}
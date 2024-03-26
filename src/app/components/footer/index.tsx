import clsx from "clsx"

import { work_sans } from "@/app/ui/fonts"
import styles from "./styles.module.scss"

export default function Footer() {
  return (
    <footer className={clsx(work_sans.variable, styles.Footer)}>
      <small>
        © 2024 Josely Méndez Catano, Asesora de Seguros.<br />
        Todos los derechos reservados.
      </small>
    </footer>
  )
}
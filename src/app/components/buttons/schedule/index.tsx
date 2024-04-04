import Link from 'next/link'

import { CalendarIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function ScheduleButton() {

  return (
    <Link
      href='https://calendly.com/joselyseguros/asesoria'
      target='_blank'
      className={styles.Button}
    >
      <i className={styles.Button_icon}>
        <CalendarIcon />
      </i>
      <span>Agenda una cita</span>
    </Link>
  )
}
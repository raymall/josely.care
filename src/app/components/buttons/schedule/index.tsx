import Link from 'next/link'

import clsx from 'clsx'

import { CalendarIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function ScheduleButton({ minimal }: { minimal?: boolean }) {

  return (
    <Link
      href='https://calendly.com/joselyseguros/asesoria'
      target='_blank'
      className={clsx({
        [styles.Button__minimal]: minimal
      }, styles.Button)}
    >
      <i className={styles.Button_icon}>
        <CalendarIcon />
      </i>
      <span>Agenda una cita</span>
    </Link>
  )
}
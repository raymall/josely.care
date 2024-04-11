import Link from 'next/link'

import clsx from 'clsx'

import { MailIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton({ minimal }: { minimal?: boolean }) {
  return (
    <Link
      href='mailto:joselymendez.seguros@gmail.com'
      className={clsx({
        [styles.Button__minimal]: minimal
      }, styles.Button)}
    >
      <i className={styles.Button_icon}>
        <MailIcon />
      </i>
      <span>Mándame un correo</span>
    </Link>
  )
}
import Link from 'next/link'

import { MailIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton() {
  return (
    <Link
      href='mailto:joselymendez.seguros@gmail.com'
      className={styles.Button}
    >
      <i className={styles.Button_icon}>
        <MailIcon />
      </i>
      <span>Mándame un correo</span>
    </Link>
  )
}
import Link from 'next/link'

import { AddContactIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton() {
  return (
    <Link
      href='/files/contact-card.vcf'
      target='_blank'
      className={styles.Button}
    >
      <i className={styles.Button_icon}>
        <AddContactIcon />
      </i>
      <span>Agrégame a tus contactos</span>
    </Link>
  )
}
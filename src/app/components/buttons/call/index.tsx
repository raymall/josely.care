import Link from 'next/link'

import { CallIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton() {
  return (
    <Link
      href='tel:+18296452301'
      className={styles.Button}
    >
      <i className={styles.Button_icon}>
        <CallIcon />
      </i>
      <span>Llámame</span>
    </Link>
  )
}
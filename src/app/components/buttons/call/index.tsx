import Link from 'next/link'

import clsx from 'clsx'

import { CallIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton({ minimal }: { minimal?: boolean }) {
  return (
    <Link
      href='tel:+18296452301'
      className={clsx({
        [styles.Button__minimal]: minimal
      }, styles.Button)}
    >
      <i className={styles.Button_icon}>
        <CallIcon />
      </i>
      <span>Llámame</span>
    </Link>
  )
}
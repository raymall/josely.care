import Link from 'next/link'

import clsx from 'clsx'

import { WhatsappIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton({ minimal }: { minimal?: boolean }) {
  const encodedMessage = encodeURIComponent('Hola Josely! Quisiera que me asesores sobre los diferentes productos que ofreces de seguros.')

  return (
    <Link
      href={`https://wa.me/18296452301?text=${encodedMessage}`}
      className={clsx({
        [styles.Button__minimal]: minimal
      }, styles.Button)}
      target='_blank'
    >
      <i className={styles.Button_icon}>
        <WhatsappIcon />
      </i>
      <span>Escríbeme al WhatsApp</span>
    </Link>
  )
}
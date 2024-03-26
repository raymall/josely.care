import Link from 'next/link'

import { WhatsappIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function WhatsAppMessageButton() {
  const encodedMessage = encodeURIComponent('Hola Josely! Quisiera que me asesores sobre los diferentes productos que ofreces de Seguros de Vida y Salud internacional. ¿Podrías ayudarme?')

  return (
    <Link
      href={`https://wa.me/18296452301?text=${encodedMessage}`}
      className={styles.Button}
      target='_blank'
    >
      <i className={styles.Button_icon}>
        <WhatsappIcon />
      </i>
      <span>Escríbeme al WhatsApp</span>
    </Link>
  )
}
import Link from 'next/link'

import { LinkedinIcon } from '@/app/ui/icons'
import styles from './styles.module.scss'

export default function LinkedinButton() {
  return (
    <Link
      href='https://www.linkedin.com/in/josely-méndez-catano-a82b42a5/'
      className={styles.Button}
      target='_blank'
    >
      <i className={styles.Button_icon}>
        <LinkedinIcon />
      </i>
      <span>Linkedin</span>
    </Link>
  )
}
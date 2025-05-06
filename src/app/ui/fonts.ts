import {
  Work_Sans,
  Fira_Sans,
  Chivo,
  Nunito,
  Encode_Sans,
  IBM_Plex_Serif
} from 'next/font/google'

export const work_sans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
})

export const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fira-sans',
})

export const chivo = Chivo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-chivo',
})

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito',
})

export const encode_sans = Encode_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: '--font-encode-sans',
})

export const ibm_plex_serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-ibm-plex-serif',
})

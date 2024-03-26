import {
  Work_Sans,
  Fira_Sans,
  // Libre_Franklin,
  Chivo,
  // Rubik
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

// export const libre_franklin = Libre_Franklin({
//   subsets: ['latin'],
//   weight: ['400', '500', '700', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-libre-franklin',
// })

export const chivo = Chivo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-chivo',
})

// export const rubik = Rubik({
//   subsets: ['latin'],
//   weight: ['400', '500', '700', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-rubik',
// })

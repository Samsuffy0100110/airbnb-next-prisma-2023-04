import { Nunito } from 'next/font/google';

import './globals.scss';

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './style.css'
import Text from './_/ui/atoms/Text'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TGFR_',
  description: 'Meu portfólio <3',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

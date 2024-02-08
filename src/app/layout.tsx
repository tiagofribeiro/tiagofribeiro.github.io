import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from '@/app/_lib/global/registry'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TGFR_',
  description: 'Meu portfólio <3',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={font.className}>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout;

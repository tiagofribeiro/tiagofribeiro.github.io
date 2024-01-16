import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Header from './ui/organisms/Header'
import StyledComponentsRegistry from './lib/global/registry'
import { GlobalStyles } from './lib/global/styles'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TGFR_',
  description: 'Meu portfólio <3',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout;

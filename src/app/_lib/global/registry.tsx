'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

/**
 * Renderiza os componentes `styled` no servidor, disponibilizando-os tanto em SSR quanto em CSR.
 * 
 * @param children - Toda a aplicação descendente do RootLayout
 * @returns Os estilos dos componentes `styled` estáticos em CSS
 */
const StyledComponentsRegistry = ({children}: {children: React.ReactNode}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') {
    return <>{children}</>
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default StyledComponentsRegistry;
import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import Theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

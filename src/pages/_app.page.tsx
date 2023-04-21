import '@/styles/globals.scss'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/defaultTheme'

import Main from '@/components/Main/Main'
import Header from '@/components/Header/Header'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppWithLayoutProps = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppWithLayoutProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header className="fixed top-0 left-0 right-0 " />
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Main>
    </ThemeProvider>
  )
}

export default App

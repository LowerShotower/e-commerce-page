import '@/styles/globals.scss'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@/styles/defaultTheme'
// import { Provider } from 'react-redux'
import Main from '@/components/Main/Main'
import Header from '@/components/Header/Header'
// import { wrapper } from '@/store'
// import { PersistGate } from 'redux-persist/integration/react'
// import { useStore } from 'react-redux'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppWithLayoutProps = AppProps & {
  Component: NextPageWithLayout
}

function App({
  Component,
  pageProps,
}: // ...rest
AppWithLayoutProps) {
  // const getLayout = Component.getLayout ?? ((page) => page)
  // const store: any = useStore()
  // const { store, props } = wrapper.useWrappedStore(rest)
  // const { pageProps } = props
  return (
    // <Provider store={store}>
    //   <ThemeProvider theme={defaultTheme}>
    //     <GlobalStyle />
    //     <Component {...pageProps} />
    //   </ThemeProvider>
    // </Provider>
    // <PersistGate persistor={store.__persistor} loading={null}>
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <Header className="fixed top-0 left-0 right-0 " />
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
    // </PersistGate>
  )
}

export default App
// export default wrapper.withRedux(App)

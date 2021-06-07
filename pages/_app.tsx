import type { AppProps } from 'next/app'

function MyApp(appProps: AppProps) {
  const { Component, pageProps } = appProps
  return <Component {...pageProps} />
}
export default MyApp

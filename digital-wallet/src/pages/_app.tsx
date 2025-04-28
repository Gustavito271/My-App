import '@/styles/globals.css'
import '@fontsource/big-shoulders-text'
import '@fontsource/roboto'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

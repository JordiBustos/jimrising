import '@/styles/globals.css'
import '@/styles/reset.css'
import '@/styles/navbar.css'
import '@/styles/ticker.css'
import '@/styles/sponsors.css'
import '@/styles/twitchSection.css'
import '@/styles/acerca.css'

import type { AppProps } from 'next/app'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

import '../styles/globals.css'
import { NavShell } from "./../components/index";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <NavShell><Component {...pageProps} /></NavShell>
}

export default MyApp

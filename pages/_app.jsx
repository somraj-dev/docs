import 'nextra-theme-docs/style.css'
import '../styles/footer.css'
import { CookieConsent } from '../components/CookieConsent'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  )
}

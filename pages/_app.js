import FooterDef from '@/components/FooterDef'
import NavbarDef from '@/components/NavbarDef'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <NavbarDef/>
  <Component {...pageProps} />
  <FooterDef/>
  </>
  )


}

import { Source_Sans_Pro } from '@next/font/google'
import '../styles/globals.scss'


const sourceSansPro = Source_Sans_Pro({
  weight: ['400', '600', '700'],
})

function MyApp({ Component, pageProps }) {
  return <div className={sourceSansPro.className}>
          <Component {...pageProps} />
        </div>

}   

export default MyApp

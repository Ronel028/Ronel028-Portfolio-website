import { motion } from 'framer-motion'
import { Source_Sans_Pro } from '@next/font/google'
import '../styles/globals.scss'


const sourceSansPro = Source_Sans_Pro({
  weight: ['400', '600', '700'],
})

function MyApp({ Component, pageProps, router }) {

  return <motion.div 
          key={router.route}
          className={sourceSansPro.className} 
          initial='pageInitial' 
          animate='pageAnimate' 
          variants={{
            pageInitial:{
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}
        >
          <Component {...pageProps} />
        </motion.div>

}   

export default MyApp

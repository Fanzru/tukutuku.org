import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextSeo} from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-poppins">
      <NextSeo 
          title="tukutuku.org"
          description="Buat eventmu dan ciptakan kenangan yang indah."
        />
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp

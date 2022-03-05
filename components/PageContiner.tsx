import Head from 'next/head'
import {FC} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const PageContainer: FC = ({ children,...props}) => {
  return (
    <div>
        <Head >
          <meta
            name="keywords"
            content="tuku-tuku, tukutuku, tuku, tukutuku.org"
            title='tukutuku.org'
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="">
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
    
  )
}


export default PageContainer
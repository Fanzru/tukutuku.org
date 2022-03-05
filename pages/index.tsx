import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageContainer from '../components/PageContiner'
import Services from '../components/Services'
import Heros from '../components/Heros'
import WhyUs from '../components/WhyUs'
const Home: NextPage = () => {
  return (
    <>
      <PageContainer>
        <Heros/>
        <Services/>
        <WhyUs/>
      </PageContainer>
    </>
  )
}

export default Home

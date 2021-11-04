import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/HomeStyles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="wallacegemlo reactjs setup" />
      </Head>

      <h1>NextJS Structure</h1>
      <p>A ReactJS + Next.js structure made by&nbsp;
        <Link href="https://github.com/wallacegmelo"><a>@wallacegmelo</a></Link>
      </p>
    </Container>
  )
}

export default Home
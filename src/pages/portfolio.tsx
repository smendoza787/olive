import React from 'react'
import Layout from '../components/layout'
import PortfolioBlock from '../components/PortfolioBlock'
import styled from 'styled-components'

const ComingSoonText = styled.h2`
  font-family: 'Fredoka One', sans-serif;
  text-align: center;
  margin: 2.5rem 0;
`

function PortfolioPage() {
  return (
    <Layout>
      <ComingSoonText>🚧 Coming Soon 🚧</ComingSoonText>
    </Layout>
  )
}

export default PortfolioPage

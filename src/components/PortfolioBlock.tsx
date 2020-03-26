import React from 'react'
import styled from 'styled-components'

const PortfolioWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 0px 1px 0px #000;
  width: 100%;
  margin: 2.5rem 0;
  padding: 1rem;

  @media only screen and (min-width: 1250px) {
    width: 45%;
  }

  h2 {
    font-family: 'Pacifico', sans-serif;
  }

  p {
    font-family: 'Roboto Slab', monospace;
  }
`

const PortfolioImage = styled.div<{ src: string }>`
  height: 100%;
  width: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
`

interface PortfolioBlockProps {
  title: string
  imgSrc: string
}

function PortfolioBlock({ title, imgSrc }: PortfolioBlockProps) {
  return (
    <PortfolioWrapper>
      <h2>{title}</h2>
      
    </PortfolioWrapper>
  )
}

export default PortfolioBlock

import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
`

const SiteBannerWrapper = styled.div`
  background-color: dodgerblue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 0;

  p {
    font-size: 1.2rem;
    font-family: 'Roboto Slab', sans-serif;
    margin: 0;
  }
`

const SiteBanner = () => {
  return (
    <Link href="https://www.twitter.com/swergi0">
      <SiteBannerWrapper>
        <p>Follow me on Twitter!</p>
      </SiteBannerWrapper>
    </Link>
  )
}

export default SiteBanner

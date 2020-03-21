import styled from 'styled-components'
import { Link } from 'gatsby'
import { desktopOnly } from '../../helpers/styled'

export const BlogPostListItemWrapper = styled.div`
  padding-bottom: 3rem;
  font-family: 'Roboto Slab', sans-serif;

  &:not(:last-child) {
    border-bottom: 2px dotted black;
  }

  &:not(:first-child) {
    padding-top: 2.5rem;
  }
`

export const BPTitle = styled(Link)`
  font-family: 'Fredoka One', sans-serif;
  text-decoration: none;
  color: #000;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.75rem;
  line-height: 1.75rem;

  ${desktopOnly`
    margin-right: 0.75rem;
  `}
`

export const BPTimestamp = styled.p`
  font-size: 1rem;
  color: lightgray;
  margin-bottom: 1.5rem;

  ${desktopOnly`
    margin-bottom: 0;
  `}
`

export const BPHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2rem;
  align-items: center;
  padding: 0.75rem 0;

  ${desktopOnly`
    flex-direction: row;
  `}
`

export const BPImage = styled(Link)<{ src: string }>`
  width: 100%;
  height: 10rem;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});

  ${desktopOnly`
    width: 90rem;
  `}
`
export const BPBody = styled.div`
  display: flex;
  flex-direction: column;

  ${desktopOnly`
    flex-direction: row;
  `}
`

export const BPRichContent = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  padding: 1rem 0;
  text-align: justify;

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Fredoka One', sans-serif;
    margin-top: 2.5rem;
  }

  b {
    font-family: 'Fredoka One', sans-serif;
  }

  hr {
    height: 0;
    border-bottom: 5px dotted black;
    background-color: white;
  }

  ${desktopOnly`
    padding: 0;
  `}
`

export const BPContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${desktopOnly`
    padding-left: 1rem;
  `}
`

export const BPInnerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

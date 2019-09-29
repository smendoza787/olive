import styled from "styled-components"
import { Link } from "gatsby"
import { desktopOnly } from "../../helpers/styled"


export const BlogPostListItemWrapper = styled.div`
  padding: 3rem 0;
  font-family: 'Roboto Slab', sans-serif;

  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
`

export const BPTitle = styled(Link)`
  font-family: 'Roboto Slab', sans-serif;
  margin-right: 0.75rem;
  text-decoration: none;
  color: #000;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.75rem;
  line-height: 1.75rem;
`

export const BPTimestamp = styled.p`
  font-size: 0.8rem;
  color: lightgray;
  text-align: center;
`

export const BPHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: center;

  ${desktopOnly`
    flex-direction: row;
    justify-content: space-between;
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

  ${desktopOnly`
    padding: 0;
  `}
`

export const BPContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${desktopOnly`
    padding-left: 1rem;
  `}
`
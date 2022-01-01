import styled from 'styled-components'
import { desktopOnly, tabletOnly } from '../../helpers/styled'

export const BlogPostListItemWrapper = styled.div<{ isActive?: boolean }>`
  font-family: 'Roboto Slab', sans-serif;
  margin-top: 2rem;

  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 0px 4px 0px #000;

  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 7px 0px #000;
    cursor: pointer;
  }

  ${desktopOnly`
    width: 50%;
  `}
`

export const BPMacHeader = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
  margin: 0 -1px;
  align-items: center;
`

export const BPContent = styled.div`
  padding: 8px;
`

export const Circle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #000;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
`

export const BPTitle = styled.h3`
  font-family: 'Fredoka One', sans-serif;
  text-decoration: none;
  color: #000;
  margin-top: 16px;
  margin-bottom: 16px;

  ${desktopOnly`
    margin-right: 0.75rem;
  `}
`

export const BPTimestamp = styled.p`
  font-size: 1rem;
  color: #8a8a8a;
  margin-bottom: 0;
`

export const BPHeader = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;

  ${desktopOnly`
    flex-direction: row;
  `}
`

export const BPImage = styled.img<{ src: string }>`
  width: 100%;
  height: 8rem;
  object-fit: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
  border-radius: 3px;

  ${desktopOnly`
    width: 30rem;
  `}
`
export const BPBody = styled.div`
  display: grid;

  ${tabletOnly`
    grid-template-columns: minmax(auto, 20rem) 1fr;
  `}
`

export const BPRichContent = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  font-size: 1.2rem;
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

  code {
    background-color: #000;
    border: 1px solid #ddd;
    border-left: 1rem solid dodgerblue;
    color: #fff;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 1.6rem;
    max-width: 100%;
    overflow: auto;
    padding: 1rem 1.5rem;
    display: block;
    word-wrap: break-word;
    white-space: pre;
    border-radius: 4px;
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
  color: black;
  margin-top: 0.8rem;
  
  a {
    color: black;
  }
  
  ${tabletOnly`
    margin-top: 0;
    padding-left: 1.6rem;
  `}
`

export const BPInnerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

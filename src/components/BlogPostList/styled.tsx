import styled from 'styled-components'
import { desktopOnly } from '../../helpers/styled'

export const BlogPostListItemWrapper = styled.div<{ isActive?: boolean }>`
  font-family: 'Roboto Slab', sans-serif;
  margin-top: 2rem;
  padding: 1rem;

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
`

export const Circle = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: #000;

  /* margin-left: 1rem; */
  margin-bottom: 0.8rem;

  margin-left: 0.5rem;

  &:first-of-type {
    margin-left: 0;
  }
`

export const BPTitle = styled.h3`
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
  font-size: 2rem;
  align-items: center;

  ${desktopOnly`
    flex-direction: row;
  `}
`

export const BPImage = styled.div<{ src: string }>`
  width: 100%;
  height: 10rem;
  background-size: cover;
  background-position: center;
  background-image: url(${({ src }) => src});
  border-radius: 3px;

  ${desktopOnly`
    width: 30rem;
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
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgb(24 108 112 / 55%));
    border: 1px solid #ddd;
    border-left: 1rem solid #00ff7e;
    color: white;
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

  a {
    color: black;
  }

  ${desktopOnly`
    padding-left: 1rem;
  `}
`

export const BPInnerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

import React from 'react'
import styled, { css, StyledProps } from 'styled-components'
import DopeMoji, { DopeMojiSize } from '../components/DopeMoji'
import { desktopOnly, tabletOnly } from '../helpers/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`

const HeaderText = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  font-size: 3.5rem;
`

const PillList = styled.div`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const PillListTuple = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
`

function renderDarkModeStyles(props: StyledProps<{ isActive: boolean }>) {
  if (props.isActive) {
    return css`
      a,
      a:visited {
        color: #fff;
      }
      background-color: rgb(206, 103, 103);
    `
  }
  return css`
    a,
    a:visited {
      color: #000;
    }
  `
}

const PillTag = styled.div<{ isActive: boolean }>`
  ${renderDarkModeStyles}

  a {
    text-decoration: none;
    font-size: 1rem;
    padding: 0.2rem 1rem;
  }

  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 0px 2px 0px #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  transition: all .2s;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    box-shadow: 0px 4px 0px #000;
    transform: translateY(-2px);
    cursor: pointer;
  }

  ${desktopOnly`
    width: initial;
    height: initial;
    padding: 0 1rem;
  `}
`

const DesktopEmoji = styled.span`
  display: none;
  margin-top: 3.5rem;
  margin-bottom: 1.2rem;

  ${tabletOnly`
    display: inline;
  `}
`

function getPathName() {
  return typeof window !== `undefined` && window.location && window.location.pathname
}

function isPortfolioPage() {
  return getPathName() === '/portfolio'
}

function isBlogPage() {
  return getPathName() !== '/portfolio'
}

export default function SiteHeader() {
  return (
    <HeaderWrapper>
      <DesktopEmoji>
        <DopeMoji size={DopeMojiSize.LARGE} />
      </DesktopEmoji>
      <HeaderText>Quicksand</HeaderText>
      <PillList>
        <PillListTuple>
          <PillTag isActive={isBlogPage()}>
            <Link to="/">Blog</Link>
          </PillTag>
          <PillTag isActive={isPortfolioPage()}>
            <Link to="/portfolio">Portfolio</Link>
          </PillTag>
        </PillListTuple>
      </PillList>
    </HeaderWrapper>
  )
}

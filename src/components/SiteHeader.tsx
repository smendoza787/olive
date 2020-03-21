import React from 'react'
import styled from 'styled-components'
import DopeMoji, { DopeMojiSize } from '../components/DopeMoji'
import { desktopOnly, tabletOnly } from '../helpers/styled'
import { Link } from 'gatsby'

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`

const HeaderText = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 3.5rem;
`

const PillList = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${desktopOnly`
    display: flex;
  `}
`

const PillListTuple = styled.div`
  padding: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
`

const PillTag = styled(Link)`
  text-decoration: none;
  color: #000;
  border-radius: 5px;
  border: 2px solid #000;
  font-size: 1rem;
  box-shadow: 0px 1px 0px #000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 2.25rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    position: relative;
    bottom: 3px;
    box-shadow: 0px 3px 0px #000;
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

const MobileEmoji = styled.span`
  display: flex;
  margin-top: 2rem;
  justify-content: center;

  ${tabletOnly`
    display: none;
  `}
`

export default function SiteHeader() {
  return (
    <HeaderWrapper>
      <MobileEmoji>
        <DopeMoji size={DopeMojiSize.MEDIUM} />
      </MobileEmoji>
      <DesktopEmoji>
        <DopeMoji size={DopeMojiSize.LARGE} />
      </DesktopEmoji>
      <HeaderText>Quicksand</HeaderText>
      <PillList>
        <PillListTuple>
          <PillTag to="/">Blog</PillTag>
          <PillTag to="/portfolio">Portfolio</PillTag>
        </PillListTuple>
      </PillList>
    </HeaderWrapper>
  )
}

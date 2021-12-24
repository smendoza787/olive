import { css } from 'styled-components'

export const xlDesktopOnly = (styles: TemplateStringsArray) => css`
  @media screen and (min-width: 1024px) {
    ${styles}
  }
`

export const desktopOnly = (styles: TemplateStringsArray) => css`
  @media screen and (min-width: 768px) {
    ${styles}
  }
`

export const tabletOnly = (styles: TemplateStringsArray) => css`
  @media screen and (min-width: 480px) {
    ${styles}
  }
`

export const mobileOnly = (styles: TemplateStringsArray) => css`
  @media screen and (max-width: 320px) {
    ${styles}
  }
`

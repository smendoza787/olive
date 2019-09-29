import { css } from "styled-components"

export const desktopOnly = (styles: TemplateStringsArray) => css`
  @media screen and (min-width: 800px) {
    ${styles}
  }
`

export const tabletOnly = (styles: TemplateStringsArray) => css`
  @media screen and (min-width: 540px) {
    ${styles}
  }
`
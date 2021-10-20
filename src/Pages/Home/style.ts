import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template:
    "logo header" auto
    "nav main" 1fr
    "footer footer" auto
    /auto 1fr;

  justify-items: stretch;

  min-height: 100vh;
  width: 100vw;

  @media (min-width: 760px) {
    grid-template:
    "logo header" auto
    "nav main" 1fr
    "footer footer" auto
    /20vw 1fr;
`

export const Footer = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: center;
  align-items: center;

  * {
    text-align: center;
    font-size: 1.4rem;
    color: ${({theme}) => theme.contrast}50;
  }
`
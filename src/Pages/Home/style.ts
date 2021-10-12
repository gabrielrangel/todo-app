import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template:
  "logo" auto
  "header" auto
  "main" 1fr
  "footer" auto
  /100vw;

  justify-items: stretch;

  min-height: 100vh;
  width: 100vw;

  @media (min-width: 760px) {
    grid-template:
    "logo header" auto
    "main main" 1fr
    "footer footer" auto
    /auto 1fr;
    margin: 0 10%;
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
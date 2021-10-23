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

  .logo,
  header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color: ${({theme}) => theme.primaryColor}EE;
  }
}

@media (min-width: 760px) {
  grid-template:
    "logo header" auto
    "nav main" 1fr
    "footer footer" auto
    /20vw 1fr;
`
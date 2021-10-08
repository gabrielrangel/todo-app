import styled from "styled-components";
import LogoComponent from "../../Components/Logo";

export const Wrapper = styled.div`
  display: grid;
  grid-template:
  "logo user" auto
  "main main" 1fr
  "footer footer" auto
  / auto 1fr;
  
  min-height: 100vh;
  width: 100vw;
`

export const Logo = styled(LogoComponent)`
  grid-area: logo;
`

export const User = styled.div`
  grid-area: user;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  img {
    border-radius: 100px;
    height: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const Main = styled.main`
  grid-area: main;
  padding: 10px;
  
  display: flex;
  flex-flow: column;
  gap: 20px;
  
  @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    
    > * {
      flex-basis: 40%;
      flex-grow: 1;
    }
    
    h1 {
      flex-basis: 100%;
    }
  }
  
  @media (orientation: portrait) {
    h1 {
      width: 100%;
    }
  }
`

export const Footer = styled.footer`
  grid-area: footer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  * {
    text-align: center;
    font-size: .8rem;
    color: ${({theme}) => theme.contrast}50;
  }
`
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
  margin: 0 1vh;
  content: "";
  
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 1vmin;
  
  h1 {
    font-family: "Lato", sans-serif;
    font-size: 1.5rem;
    color: ${({theme}) => theme.primaryColor};
    padding: 2vh 0 1vh;
    width: 100%;
    flex-grow: 0;
  }
  
  
  @media (orientation: landscape) and (min-width: 730px) {
    flex-direction: row;
  }
  
  * {
    flex-grow: 1;
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
import styled from "styled-components";
import LogoComponent from "../../Components/Logo";
import Card from "../../Components/Card";
import {GrowingCardWrapper} from "./Components/GrowingCard";

export const Wrapper = styled.div`
  display: grid;
  grid-template:
  "logo user" auto
  "main main" 1fr
  "footer footer" auto
  / auto 1fr;
  
  min-height: 100vh;
  width: 100vw;
  padding: 10px 5px 0 5px;
`

export const Logo = styled(LogoComponent)`
  grid-area: logo;
`

export const User = styled.div`
  grid-area: user;
  
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  
  * {
    font-family: "Lato", sans-serif;
    font-weight: 400;
  }
  

  img {
    border-radius: 100px;
    height: 1.5rem;
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
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  
  h1 {
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 20px 0;
    flex-basis: 100%;
  }
  
  > * {
    flex: 1;
    width: 100%;
  }
  
  > *:last-child {
    flex: 2;
  }
  
    @media (orientation: landscape), (min-width: 550px) {
      > ${Card}, ${GrowingCardWrapper} {
        flex-basis: 40%;
        min-width: 40%;
      }
    }
    
    @media (orientation: landscape), (min-width: 730px) {
      > ${Card}, ${GrowingCardWrapper} {
        flex-basis: 30%;
        min-width: 30%;
      }
    }
    
    @media (orientation: landscape), (min-width: 1100px) {
      > ${Card}, ${GrowingCardWrapper} {
        flex-basis: 20%;
        min-width: 20%;
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
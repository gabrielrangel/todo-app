import styled from "styled-components";
import Card from "../../Components/Card";

export const Wrapper = styled.div`
  display: grid;
  grid-template:
  "illustration" 60vh
  "login" 40vh
  "footer" auto
  / 1fr;
  width: 100vw;
  
  .illustration {
    grid-area: illustration;
    width: 100%;
    margin: auto;
  }
  
  @media (orientation: landscape) {
    grid-template:
    "illustration login" 100vh
    "footer footer" auto
    / 40vw 1fr;

    .illustration {
      height: auto;
      width: 100%;
    }
  }
`

export const Main = styled(Card)`
  grid-area: login;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0 auto;


  @media(orientation: portrait) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  @media(orientation: landscape) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px;
  height: 50px;

  border-radius: 15px;
  border: solid 1px ${({theme}) => theme.primaryColor};
  

  background-color: transparent;

  transition: 1s;
  
  * {
    transition: 1s;
    color: ${({theme}) => theme.primaryColor};
  }
  
  cursor: pointer;
  
  svg, path {
    height: 100%;
    width: auto;
  }
  
  :hover {
    border: solid 1px ${({theme})=>theme.secondaryColor};
    * {
      color: ${({theme})=>theme.secondaryColor};
    }
  }
`

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #34376B10;
  width: 100%;
  padding: 20px 0;
  
  * {
    font-size: .7rem;
    text-align: center;
    display: block;
  }
  
  @media (orientation: landscape) {
    background-color: transparent;
  }
`
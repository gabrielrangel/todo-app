import styled from "styled-components";
import Card from "../../Components/Card";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  min-height: 100vh;
  
  justify-content: flex-start;
  align-items: center;
  
  .illustration {
    height: 50vh;
    width: auto;
    margin: 5vh 0;
  }
  
  @media (orientation: landscape) {
    flex-direction: row;
    justify-content: center;
    
    .illustration {
      height: 80vh;
      margin: 10vh 0;
    }
  }
`

export const Main = styled(Card)`
  min-height: 40vh;
  width: 100vw;

  flex-direction: column;
  justify-content: center;
  
  @media (orientation: landscape) {
    width: 50vw;
  }
  
  @media (orientation: portrait) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
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
  background-color: ${({theme}) => theme.primaryColor}20;
  padding: 15px;
  width: 100vw;
  
  * {
    font-size: .7rem;
    text-align: center;
    display: block;
  }
  
  @media (orientation: landscape) {
    background-color: transparent;
  }
`
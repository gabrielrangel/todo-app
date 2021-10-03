import styled from "styled-components";

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

export const Main = styled.main`
  min-height: 40vh;
  width: 100vw;

  background-color: ${({theme}) => theme.primaryColor}50;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;
  
  @media (orientation: landscape) {
    width: 50vw;
    border-radius: 20px;
    margin: 0;
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
  border: solid 1px #f8f8f8;  

  background-color: ${({theme}) => theme.primaryColor}50;
  
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
  background-color: ${({theme}) => theme.primaryColor}50;
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
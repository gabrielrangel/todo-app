import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  align-content: stretch;
  
  justify-content: center;
  flex-wrap: wrap;
`

export const Header = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 10px 20px;
  
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    
    img {
      border-radius: 100px;
      height: 1rem;
    }
    
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`

export const Main = styled.main`
  content: "";
  align-self: stretch;
`

export const Footer = styled.footer`
  width: 100vw;
  align-self: flex-end;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
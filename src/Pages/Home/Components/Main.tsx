import styled from "styled-components";
import {ReactNode} from "react";

type MainProps = {
    children: ReactNode;
}

const MainStyle = styled.main`
  grid-area: main;
  margin: 10px;
  
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: stretch;
  gap: 10px;
  flex-wrap: wrap;
  
  
  > * {
    flex: 1;
    flex-basis: 100%;
  }
  
  @media (min-width: 660px) {
    > * {
      flex-basis: 40%;
    }
    > *:not(:last-child) {
      max-width: calc(100%/2);
    }
  }
  
  @media(min-width: 760px) {
    > * {
      flex-basis: 30%;
      }
    > *:not(:last-child) {
      max-width: calc(100%/3);
    }  
  }
    
  @media (min-width: 1024px) {
    > * {
      flex-basis: 20%;
    }
    > *:not(:last-child) {
      max-width: calc(100%/4);
    }
`

export function Main (props: MainProps) {
    return (
        <MainStyle>
            {props.children}
        </MainStyle>
    )
}
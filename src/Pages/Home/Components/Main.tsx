import styled from "styled-components";
import {ReactNode} from "react";

type MainProps = {
    children: ReactNode;
}

const MainStyle = styled.main`
  grid-area: main;
  margin: 50px 10px;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  
  > * {
    flex: 0;
    flex-basis: 100%;
  }
  
  :after {
    content: "";
    align-self: stretch;
    min-width: calc(100%/4);
    max-width: 100%;
    flex: 10;
  }
  
  @media (min-width: 660px) {
    > * {
      flex-basis: calc((100% - 10px)/2);
    }
  }
  
  @media(min-width: 760px) {
    > * {
      flex-basis: calc((100% - 20px)/3);
      }
  }
    
  @media (min-width: 1024px) {
    > * {
      flex-basis: calc((100% - 30px)/4);
    }
  }
`

export function Main (props: MainProps) {
    return (
        <MainStyle>
            {props.children}
        </MainStyle>
    )
}
import styled from "styled-components";
import {TiPlus} from "react-icons/ti"
import StyledCard from "../../../Components/Card";
import React, {ReactNode, useState} from "react";
import {ListContextProvider} from "../../../Context/ListContext";

type ButtonProps = {
    collapsed:boolean
}

type GrowingCardProps = {
    collapsed?: boolean,
    alpha?: string,
    children?: ReactNode
}

export const Card = styled(StyledCard)<GrowingCardProps>`
   animation: grow 1s ease-in normal;
  
  ${({collapsed, theme}) => collapsed ? `
    background-color: ${theme.emphasis};
  ` : ``}
  
  .header {
    display: flex;
    justify-content: flex-start;
    align-content: stretch;
    align-items: center;
    gap: 10px;
    
    button {
      flex: 0;
    }
  }

  @keyframes grow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
`

export const GrowingCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const Button = styled.button<ButtonProps>`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    
    border-radius: 100px;
    background-color: ${({theme}) => theme.emphasis};
    
    border: solid 1px ${({theme}) => theme.primaryColor};
    transition: 1s;
    
    ${({collapsed}) => collapsed ? "" : "transform: rotate(45deg);"}
    
    * {
      color: ${({theme}) => theme.primaryColor};
    }
`

export function GrowingCard(props:GrowingCardProps) {
    const [collapsedState, setCollapsedState] = useState<boolean>(props.collapsed || true)
    const [header, ...children] = React.Children.toArray(props.children)

    return(
        <ListContextProvider>
            <GrowingCardWrapper>
                <Card key={String(collapsedState)} collapsed={collapsedState} alpha={props.alpha}>
                    <div className="header">
                        {collapsedState || header}
                        <Button collapsed={collapsedState} onClick={() => setCollapsedState(prevState => !prevState)}><TiPlus/></Button>
                    </div>
                    {collapsedState || children}
                </Card>
            </GrowingCardWrapper>
        </ListContextProvider>
    )
}
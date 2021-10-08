import CardStyle from "../../../Components/Card"

import styled from "styled-components";
import {useState} from "react";
import {TiPlus} from "react-icons/ti"

type CardProps = {
    grow?:boolean
}

type TodoListCardProps = {
    value?: Boolean
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Card  = styled(CardStyle)<CardProps>`
  flex-grow: 0;
  animation: grow 2s linear 500ms 1 normal forwards;

    @keyframes grow {
      from {
        flex-grow: 0;
        align-self: center;
      }
      to {
        flex-grow: 1;
        align-self: stretch;
      }
    }
`

export function TodoListCard(props:TodoListCardProps){
    const [collapsed, setCollapsed] = useState(true)
    return(
        <Wrapper>
            <Card grow={true}><TiPlus/></Card>
        </Wrapper>
    )
}

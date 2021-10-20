import styled from "styled-components";

import icon from "../Assets/img/event.png"

type LogoProps = {
    collapse?: boolean
}

const Style = styled.div<LogoProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  border-radius: 0;
  gap: 10px;

  @media (min-width: 700px) {
    justify-content: flex-start;
  }

  * {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    cursor: default;
  }

  strong {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.emphasis};
    display: none;
    text-shadow: ${({theme}) => theme.selected} 3px 3px;
    font-size: 2rem;

    @media (min-width: 750px) {
      display: block;
    }
  }

  img {
    min-width: 3vmax;
    max-width: 5vmax;
    margin: 10px;
  }
`

function Logo({collapse}: LogoProps) {
    return (
        <Style>
            <img src={icon} alt={"Ícone representando uma tarefa"}/>
            <strong>todo!</strong>
        </Style>
    )
}

export default Logo
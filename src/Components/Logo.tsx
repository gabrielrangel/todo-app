import styled from "styled-components";

import icon from "../Assets/img/event.png"

type LogoProps = {
    collapse?: boolean
}

const Style = styled.div<LogoProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  border-radius: 0;
  padding: 10px 20px;
  gap: 10px;

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
    visibility: hidden;
  }

  img {
    max-height: 50px;
    max-width: 50px;
  }

  @media (min-width: 400px) {
    strong {
      visibility: visible;
    }
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
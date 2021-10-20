import styled from "styled-components";

import {MdListAlt, MdTaskAlt} from "react-icons/md"

import Button from "../../../Components/Button";

const Style = styled.aside`
  grid-area: nav;

  ul {
    margin: 20px 0;
    display: flex;

    li {
      display: flex;
      margin: 5px 0;
    }
  }

  @media (min-width: 760px) {
    ul {
      flex-direction: column;
    }
  }
`

export function Nav() {
    return (
        <Style>
            <ul>
                <li>
                    <Button fill={"primaryColor"} selected value={"selected"}><MdListAlt/>Listas</Button>
                </li>
                <li>
                    <Button fill={"primaryColor"}><MdTaskAlt/>Tarefas</Button>
                </li>
            </ul>
        </Style>
    )
}
import styled from "styled-components";

import {MdListAlt, MdTaskAlt} from "react-icons/md"

import Button from "../../../Components/Button";

const Style = styled.aside`
  grid-area: nav;

  ul {
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    position: sticky;
    position: -webkit-sticky;
    top: 86px;

    background-color: ${({theme}) => theme.primaryColor}EE;

    li {
      display: flex;
      margin: 5px 0;

      ${Button} {
        width: 100%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        > *:not(:first-child) {
          display: none;

          @media (min-width: 750px) {
            display: block;
          }
        }
      }
    }
  }
`

export function Nav() {
    return (
        <Style>
            <ul>
                <li>
                    <Button fill={"primaryColor"} selected value={"selected"}><MdListAlt/> <span>Listas</span></Button>
                </li>
                <li>
                    <Button fill={"primaryColor"}><MdTaskAlt/><span>Tarefas</span></Button>
                </li>
            </ul>
        </Style>
    )
}
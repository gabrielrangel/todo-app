import styled from "styled-components";

const Style = styled.aside`
  grid-area: nav;

  ul {
    margin: 20px 0;
    display: flex;

    li {
      display: flex;
      margin: 5px 0;

      button {
        background-color: ${({theme}) => theme.secondaryColor};
        cursor: pointer;
        width: 100%;
        border: 0;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        font-family: "Lato", sans-serif;
        font-weight: 700;
        text-align: left;
        padding: 10px;
        transition: 1s;

        &[value="selected"] {
          background-color: ${({theme}) => theme.selected}10;
          cursor: default;
        }

        :not([value="selected"]):hover {
          background-color: ${({theme}) => theme.selected}05;
        }
      }
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
                    <button value={"selected"}>Listas</button>
                </li>
                <li>
                    <button>Tarefas</button>
                </li>
            </ul>
        </Style>
    )
}
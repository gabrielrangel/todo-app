import styled from "styled-components";
import {useEffect} from "react";

import {deleteList, newRecord} from "../../../Services/Database";

import {TiPlus, TiTrash} from "react-icons/ti"

import {useUserData} from "../../../Hooks/useUserData";

import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import {useAuth} from "../../../Hooks/useAuth";

const MainStyle = styled.main`
  grid-area: main;
  margin: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;

  > * {
    flex: 0;
    flex-basis: 100%;
    justify-content: center;
  }

  > ${Card} {
    padding: 20px 0;

    input {
      border: none;
      background-color: transparent;

      :focus {
        outline: none;
      }
    }

    > * {
      display: flex;
      gap: 5px;

      > * {
        flex: 0;
      }

      > *:first-child {
        flex: 1;

        margin-left: 10px;
      }

      > *:last-child {
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 660px) {
    > * {
      flex-basis: calc((100% - 10px) / 2);
    }
  }

  @media (min-width: 760px) {
    > * {
      flex-basis: calc((100% - 20px) / 3);
    }
  }

  @media (min-width: 1024px) {
    > * {
      flex-basis: calc((100% - 30px) / 4);
    }
  }
`

export function Main() {
    const {state} = useUserData()
    const {user} = useAuth()

    const handleNewTodo = (userId:string, listId:string | undefined) => {
        listId && newRecord(userId, {type: "todo", listId})
    }

    return (
        <MainStyle>
            {
                state.map(({ListId, title, value}) => (
                    <Card key={ListId}>
                        <div>
                            <input value={title} placeholder={"Lista"}/>
                            <Button className={"danger"}
                                    onClick={() => user && ListId && deleteList(user.uid, ListId)}><TiTrash/></Button>
                            <Button onClick={() => user && handleNewTodo(user.uid, ListId)}><TiPlus/></Button>
                        </div>
                    </Card>
                ))
            }
        </MainStyle>
    )
}
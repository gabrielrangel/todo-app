import {FormEvent, useCallback} from "react";
import styled from "styled-components";

import {DatabaseRecord, deleteList, List, newRecord, updateList} from "../../../Services/Database";

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
      flex-basis: calc((100% - 50px) / 4);
    }
  }
`

export function Main() {
    const {state, dispatch} = useUserData()
    const {user} = useAuth()

    const handleNewTodo = (userId: string, listId: string | undefined) => {
        listId && newRecord(userId, {type: "todo", listId})
    }

    const handleEditTitle = useCallback(
    (title: string, value: DatabaseRecord<List>) =>
        dispatch({
            type: "update",
            value: {...value, title}
        }), [dispatch]
    )

    const handleUpdateList = useCallback(
        (userId, listId) =>
            updateList(userId, state.filter(list => list.id === listId))
        , [state]
    )

    return (
        <MainStyle>
            {
                state.map((value) => (
                    <Card key={value.id}>
                        <div>
                            <input
                                value={value.title}
                                placeholder={"Lista"}
                                onChange={(e: FormEvent<HTMLInputElement>) => handleEditTitle(e.currentTarget.value, value)}
                                onBlur={() => handleUpdateList(user?.uid, value.id)}
                            />
                            <Button className={"danger"}
                                    onClick={() => user && value.id && deleteList(user.uid, value.id)}
                            > <TiTrash/> </Button>
                            <Button onClick={() => user && handleNewTodo(user.uid, value.id)}><TiPlus/></Button>
                        </div>
                    </Card>
                ))
            }
        </MainStyle>
    )
}
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
  flex-direction: column;
  align-items: stretch;

  .header {
    display: flex;
    align-items: center;

    h1 {
      margin: 10px 0;
      font-size: 2rem;
      font-weight: 700;
      flex: 1;
    }

    > * {
      flex: 0 0 30px;
    }

    button {
      display: flex;
      align-items: center;
      border-radius: 100px;
      border: none;
      transition: 1s;
      background-color: ${({theme}) => theme.primaryColor};
      cursor: pointer;
      padding: 5px;

      :hover {
        background-color: ${({theme}) => theme.secondaryColor};
      }
    }
  }

}

${Card} {
  > * {
    display: flex;

    width: 100%;
    min-height: 30px;
    gap: 5px;

    > * {
      flex: 0;

    }

    > *:first-child {
      flex: 1;
      margin: 10px 0;
    }
  }

  input {
    background-color: transparent;
    border: none;
    padding: 0 10px;
    min-width: 100px;
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
            <div className="header">
                <h1>Todas as Listas</h1>
                <button><TiPlus/></button>
            </div>
            {
                state.map((value) => (
                    <Card key={value.id}>
                        <div className={"title"}>
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
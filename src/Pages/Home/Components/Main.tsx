import {FormEvent, useCallback} from "react";
import styled from "styled-components";

import {deleteList, List, newRecord, updateList} from "../../../Services/Database";

import {TiPlus, TiTrash} from "react-icons/ti"
import {MdCheck} from "react-icons/md"

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
  }

}

${Card} {
  margin: 5px 0;
  padding: 5px 0;

  > div {
    display: flex;
    align-items: center;

    input {
      width: 20px;
      height: auto;
      flex: 1;
      background-color: transparent;
      padding: 10px;
      border: none;

      :focus {
        outline: none;
      }
    }

    button {
      margin: 10px;
      width: 30px;
      height: 30px;
    }

  }

  .title {
    &, * {
      font-family: "Lato", sans-serif;
      font-weight: 600;
      font-size: 2rem;
    }
  }

  .todo + .todo {
    border-top: solid 1px ${({theme}) => theme.primaryColor};
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 1s;

    border-radius: 100px;
    background-color: transparent;
    border: solid 2px ${({theme}) => theme.selected};

    &[value="selected"] {
      background-color: ${({theme}) => theme.selected};
    }
  }
}
`

export function Main() {
    const {state, dispatch} = useUserData()
    const {user} = useAuth()

    const handleNewTodo = (userId: string, listId: string | undefined) => {
        listId && newRecord(userId, {type: "todo", listId})
    }

    const handleNewList = (userId: string) => {
        newRecord(userId, {type: "list"})
    }

    const handleEditTitle = useCallback(
        (title: string, value: List) =>
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
                <Button onClick={() => user && handleNewList(user?.uid)}><TiPlus/></Button>
            </div>
            {
                state.map((list) => (
                    <Card key={list.id} onBlur={() => handleUpdateList(user?.uid, list.id)}>
                        <div className={"title"}>
                            <input
                                value={list.title}
                                placeholder={"Lista"}
                                onChange={(e: FormEvent<HTMLInputElement>) => handleEditTitle(e.currentTarget.value, list)}
                            />
                            <Button fill={"danger"}
                                    onClick={() => user && list.id && deleteList(user.uid, list.id)}
                            > <TiTrash/> </Button>
                            <Button fill={"emphasis"}
                                    onClick={() => user && handleNewTodo(user.uid, list.id)}><TiPlus/></Button>
                        </div>
                        {
                            list.todos && Object.entries(list.todos).map(([_, todo]) => (
                                <div key={todo.id} className={"todo"}>
                                    <button
                                        className={"checkbox"}
                                        value={todo.done ? "selected" : ""}
                                    >{
                                        todo.done && <MdCheck/>
                                    }</button>
                                    <input
                                        value={todo.title}
                                        placeholder={"Tarefa"}/>
                                </div>
                            ))
                        }
                    </Card>
                ))
            }
        </MainStyle>
    )
}
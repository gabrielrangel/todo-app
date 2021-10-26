import { FormEvent, useCallback } from "react";
import styled from "styled-components";

import {
  deleteList,
  List,
  newRecord,
  updateList,
} from "../../../Services/Database";

import { TiPlus, TiTrash } from "react-icons/ti";
import { MdCheck } from "react-icons/md";

import { useUserData } from "../../../Hooks/useUserData";

import Card from "../../../Components/Card";
import Button from "../../../Components/Button";
import { useAuth } from "../../../Hooks/useAuth";

const MainStyle = styled.main`
  grid-area: main;
  margin: 10px;
  min-height: calc(100vh - 110px);

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
  justify-content: center;

  .header {
    display: flex;
    align-items: center;
    width: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 86px;
    background-color: ${({ theme }) => theme.primaryColor}EE;
    padding: 10px;


    h1 {
      margin: 10px 0;
      font-size: 2rem;
      font-weight: 700;
      flex: 1;
    }
  }
}

${Card} {
  padding: 5px 0;
  width: 100%;
  height: auto;
  transition: 1s;

  @media (min-width: 730px) {
    max-width: calc(100% / 2 - 10px);
  }
  @media (min-width: 1024px) {
    max-width: calc(100% / 3 - 20px);
  }

  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

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

      ::placeholder {
        color: ${({ theme }) => theme.contrast}88;
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

  .todo {
    transition: 1s;

    :hover {
      background-color: ${({ theme }) => theme.contrast}10;
    }
  }

  .todo + .todo {
    border-top: solid 1px ${({ theme }) => theme.primaryColor};
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-content: center;
    transition: 1s;

    border-radius: 100px;
    background-color: transparent;
    border: solid 2px ${({ theme }) => theme.selected};

    &[value="selected"] {
      background-color: ${({ theme }) => theme.selected};
    }
  }
}
`;

export function Main() {
  const { state, dispatch } = useUserData();
  const { user } = useAuth();

  const handleNewTodo = (userId: string, listId: string | undefined) => {
    listId && newRecord(userId, { type: "todo", listId });
  };

  const handleNewList = (userId: string) => {
    newRecord(userId, { type: "list" });
  };

  const handleEditListTitle = useCallback(
    (title: string, value: List) =>
      dispatch({
        type: "update",
        value: { ...value, title },
      }),
    [dispatch]
  );

  const handleEditTodoTitle = useCallback(
    (list: List, todoIndex: number, title: string) => {
      const value = { ...list } as List;
      if (Array.isArray(value.todos)) {
        value.todos[todoIndex].title = title;
        dispatch({ type: "update", value });
      }
    },
    [dispatch]
  );

  const handleUpdateList = useCallback(
    (userId, listId) =>
      updateList(
        userId,
        state.filter((list) => list.id === listId)
      ),
    [state]
  );

  const checkboxToggle = useCallback(
    (list: List, todoIndex: number) => {
      const value = { ...list } as List;
      if (Array.isArray(value.todos)) {
        value.todos[todoIndex].done = !value.todos[todoIndex].done;
        dispatch({ type: "update", value });
      }
    },
    [dispatch]
  );

  return (
    <MainStyle>
      <div className="header">
        <h1>Todas as Listas</h1>
        <Button onClick={() => user && handleNewList(user?.uid)}>
          <TiPlus />
        </Button>
      </div>
      {state.map((list, listIndex) => (
        <Card
          key={`l${listIndex}`}
          onBlur={() => handleUpdateList(user?.uid, list.id)}
        >
          <div className={"title"}>
            <input
              value={list.title}
              placeholder={"Lista"}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                handleEditListTitle(e.currentTarget.value, list)
              }
            />
            <Button
              fill={"danger"}
              onClick={() => user && list.id && deleteList(user.uid, list.id)}
            >
              {" "}
              <TiTrash />{" "}
            </Button>
            <Button
              fill={"emphasis"}
              onClick={() => user && handleNewTodo(user.uid, list.id)}
            >
              <TiPlus />
            </Button>
          </div>
          {Array.isArray(list.todos) &&
            list.todos.map((todo, todoIndex) => (
              <div className="todo" key={`${listIndex}${todoIndex}`}>
                <button
                  className={"checkbox"}
                  value={todo.done ? "selected" : ""}
                  onClick={() => checkboxToggle(list, todoIndex)}
                >
                  {todo.done && <MdCheck />}
                </button>

                <input
                  value={todo.title}
                  placeholder={"Tarefa"}
                  onChange={(e: FormEvent<HTMLInputElement>) =>
                    handleEditTodoTitle(list, todoIndex, e.currentTarget.value)
                  }
                />
              </div>
            ))}
        </Card>
      ))}
    </MainStyle>
  );
}

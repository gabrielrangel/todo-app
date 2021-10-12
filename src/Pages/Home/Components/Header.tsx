import {User} from "firebase/auth"
import {newList} from "../../../Services/Database";

import Card from "../../../Components/Card";
import styled from "styled-components";
import {TiPlus} from "react-icons/ti"
import {useAuth} from "../../../Hooks/useAuth";

type HeaderProps = {
    title: string;
    user: User;
    logout: VoidFunction;
}

type UserProps = {
    user: User;
    logout: VoidFunction;
}

const UserStyle = styled.div`
  height: 50px;
  width: 50px;

  > * {
    width: 100%;
  }

  .photo {
    border-radius: 100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    min-width: 50px;

    * {
      color: white;
      font-weight: 900;
    }

    select,
    * {
      color: white;
      font-weight: 900;
    }

    &, > * {
      width: 100%;
    }
  }

  .dropdown * {
    text-align: center;
  }

  > ${Card} {
    display: none;
    flex-direction: column;
    justify-content: stretch;
    position: relative;
    z-index: 1;
    background-color: ${({theme}) => theme.secondaryColor};
    overflow: hidden;
    width: 150px;
    right: 100px;

    * {
      font-size: 1rem;
      font-weight: 700;
      padding: 5px;
    }

    > div:not(:first-child) {
      width: 100%;
    }

    button {
      border: none;
      background-color: transparent;
      width: 100%;
      cursor: pointer;
    }
  }

  :hover .dropdown {
    display: flex;
  }
`

const HeaderStyle = styled.header`
  grid-area: header;
  align-self: stretch;
  position: sticky;
  position: -webkit-sticky;
  top: 20px;

  margin: 20px;
  flex: 0;

  display: flex;
  align-items: center;

  > ${Card} {
    width: 100%;
    padding: 5px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    button {
      border-radius: 100px;
      border: none;

      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      background-color: ${({theme}) => theme.emphasis};
      min-width: 50px;
      min-height: 50px;
      cursor: pointer;
      color: white !important;
      transition: .5s;

      * {
        color: ${({theme}) => theme.primaryColor};
      }

      :after {
        display: none;
      }

      :hover {
        background-color: ${({theme}) => theme.emphasis}dd;
      }
    }

    h1 {
      font-family: "Lato", sans-serif;
      font-size: 1.3rem;
      flex: 1;

      @media (min-width: 375px) {
        font-size: 1.8rem;
      }

      @media (min-width: 400px) {
        font-size: 2rem;
      }
    }

    > * {
      flex: 0;
    }

    * {
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
    }
  }

`

const UserInfo = ({user, logout}: UserProps) => (
    <UserStyle>
        <button className="photo">
            {user.photoURL
                ? <img src={user.photoURL} alt={user.displayName || ""}/>
                : <div>{user.displayName
                    ? user.displayName.charAt(0).toUpperCase()
                    : "?"} </div>
            }
        </button>

        <Card className="dropdown">
            <div>{user.displayName}</div>
            <div>
                <button onClick={logout}>Sair</button>
            </div>
        </Card>

    </UserStyle>
)

export function Header(props: HeaderProps) {
    const {user} = useAuth()
    const handleNewList = () => {
        user && newList(user.uid)
    }

    return (
        <HeaderStyle>
            <Card>
                <h1>{props.title}</h1>
                <button onClick={handleNewList}><TiPlus/></button>
                <UserInfo user={props.user} logout={props.logout}/>
            </Card>
        </HeaderStyle>
    )
}
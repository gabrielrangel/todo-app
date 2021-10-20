import {User} from "firebase/auth"

import Card from "../../../Components/Card";
import styled from "styled-components";
import {TiPlus} from "react-icons/ti"
import {useAuth} from "../../../Hooks/useAuth";
import Button from "../../../Components/Button";
import {newRecord} from "../../../Services/Database";

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

  .photo > * {
    border-radius: 100px;
  }

  .dropdown {
    display: none;
  }

  :hover .dropdown {
    display: flex;
    align-items: stretch;
    width: 150px;
    position: relative;
    right: 100px;
    z-index: 1;
    gap: 5px;
    padding: 10px 5px 5px 5px;

    * {
      font-size: 1rem;
      width: 100%;
    }

    > *:first-child {
      margin: 5px 0;
      font-weight: 600;
      text-align: center;
    }
  }
`

const HeaderStyle = styled.header`
  grid-area: header;

  top: 20px;
  margin: 20px;
  align-self: stretch;

  position: sticky;
  position: -webkit-sticky;

  display: flex;
  align-items: center;

  * {
    font-family: "Lato", sans-serif;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  > ${Card} {
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 5px;

    button {
      padding: 0;
      width: 50px;
      height: 50px;

      > *:not(img) {
        padding: 10px;
      }
    }

    *:first-child {
      flex: 1;
    }

    > *:not(:first-child) {
      flex: 0;
      min-width: 50px;
      min-height: 50px;
    }
  }

`

const UserInfo = ({user, logout}: UserProps) => (
    <UserStyle>
        <Button className="photo">
            {user.photoURL
                ? <img src={user.photoURL} alt={user.displayName || ""}/>
                : <div>{user.displayName ? user.displayName.charAt(0).toUpperCase() : "?"} </div>
            }
        </Button>

        <Card className="dropdown">
            <div>{user.displayName}</div>
            <div>
                <Button onClick={logout}>Sair</Button>
            </div>
        </Card>

    </UserStyle>
)

export function Header(props: HeaderProps) {
    const {user} = useAuth()
    const handleNewList = () => {
        user && newRecord(user.uid, {type: "list"})
    }

    return (
        <HeaderStyle>
            <Card>
                <h1>{props.title}</h1>
                <Button onClick={handleNewList}><TiPlus/></Button>
                <UserInfo user={props.user} logout={props.logout}/>
            </Card>
        </HeaderStyle>
    )
}
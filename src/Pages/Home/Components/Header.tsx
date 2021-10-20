import {IoMdLogOut} from "react-icons/io"
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md"

import {User} from "firebase/auth"
import styled from "styled-components";
import {useAuth} from "../../../Hooks/useAuth";
import {newRecord} from "../../../Services/Database";
import {useTheme} from "../../../Hooks/useTheme";

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
  display: flex;
  gap: 10px;

  img {
    border-radius: 100px;
    height: 50px;
    width: 50px;
  }


`

const HeaderStyle = styled.header`
  grid-area: header;
  padding: 10px 20px;

  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;

  * {
    font-family: "Lato", sans-serif;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  button {
    border: none;
    background-color: ${({theme}) => theme.primaryColor};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 100px;
    transition: 1s;

    &, * {
      color: ${({theme}) => theme.contrast}
    }

    :hover {
      background-color: ${({theme}) => theme.secondaryColor};
    }
  }
`

const UserInfo = ({user, logout}: UserProps) => (
    user && <UserStyle>
        <button onClick={logout}><IoMdLogOut/></button>
        <img src={user?.photoURL || ""} alt={user?.displayName || "avatar"}/>
    </UserStyle>
)

export function Header(props: HeaderProps) {
    const {user} = useAuth()
    const {darkModeToggle, isDarkMode} = useTheme()

    const handleNewList = () => {
        user && newRecord(user.uid, {type: "list"})
    }

    return (
        <HeaderStyle>
            <button onClick={darkModeToggle}>{isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</button>
            <UserInfo user={props.user} logout={props.logout}/>
        </HeaderStyle>
    )
}
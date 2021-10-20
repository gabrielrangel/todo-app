import {IoMdLogOut} from "react-icons/io"
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md"

import {User} from "firebase/auth"
import styled from "styled-components";
import {useAuth} from "../../../Hooks/useAuth";
import {newRecord} from "../../../Services/Database";
import {useTheme} from "../../../Hooks/useTheme";
import Button from "../../../Components/Button";

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

`

const UserInfo = ({user, logout}: UserProps) => (
    user && <UserStyle>
        <Button onClick={logout}><IoMdLogOut/></Button>
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
            <Button onClick={darkModeToggle}>{isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</Button>
            <UserInfo user={props.user} logout={props.logout}/>
        </HeaderStyle>
    )
}
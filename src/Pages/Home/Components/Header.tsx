import Card from "../../../Components/Card";
import styled from "styled-components";
import avatar from "../../../Assets/img/avatar.png";
import {User as UserType} from "../../../Context/AuthContext";

type HeaderProps = {
    title: string;
    user: UserType;
    logout:VoidFunction;
}

type UserProps = {
    user: UserType;
    logout: VoidFunction;
}

const UserStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
  cursor: pointer;

  * {
    font-family: "Lato", sans-serif;
    font-weight: 400;
  }

  img {
    border-radius: 100px;
    height: 1.5rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  @media(max-width: 500px) {
    >*:not(:first-child) {
      display: none;
    }
  }
`

const HeaderStyle = styled.header`
  grid-area: header;
  align-self: stretch;
  
  margin: 0 10px 10px 10px;
  flex: 0;
  
  ${Card} {
    width: 100%;
    height: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    background-color: transparent;
      
    h1 {
      font-family: "Lato", sans-serif;
      font-size: 2rem;
      font-weight: 700;
    }
  }
`

const User = ({user, logout}:UserProps) => (
        <UserStyle>
            <div><img src={user.photoURL || avatar} alt={user.displayName || ""}/></div>
            <div>{user.displayName}</div>
            <button onClick={logout}>Sair</button>
        </UserStyle>
)

export function Header(props:HeaderProps) {
    return (
        <HeaderStyle>
            <Card>
                <h1>{props.title}</h1>
                <User user={props.user} logout={props.logout}/>
            </Card>
        </HeaderStyle>
    )
}
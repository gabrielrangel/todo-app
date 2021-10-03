import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Wrapper, Header, Main, Footer} from "./style"
import avatar from "../../Assets/img/avatar.png"
import Logo from "../../Components/Logo";
import Card from "../../Components/Card";

function Home(){
    const {user, logout} = useAuth()

    if (user.uid){
        return (
            <Wrapper>
                <Header>
                    <Logo/>
                    <div className="user-info">
                        <div><img src={user.photoURL || avatar} alt={user.displayName || ""}/></div>
                        <div>{user.displayName}</div>
                        <button onClick={logout}>Sair</button>
                    </div>
                </Header>

                <Main>
                    <Card/>
                </Main>

                <Footer>
                    <a href="https://www.freepik.com/vectors/business">Business vector created by freepik - www.freepik.com</a>
                </Footer>
            </Wrapper>
        )
    } else {
        return <Redirect to={"/"}/>
    }
}

export default Home
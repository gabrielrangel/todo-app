import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Wrapper, User, Main, Footer} from "./style"
import avatar from "../../Assets/img/avatar.png"
import {Logo} from "./style";
import Card from "../../Components/Card";

function Home(){
    const {user, logout} = useAuth()

    if (user.uid){
        return (
            <Wrapper>

                <Logo/>

                <User>
                    <div><img src={user.photoURL || avatar} alt={user.displayName || ""}/></div>
                    <div>{user.displayName}</div>
                    <button onClick={logout}>Sair</button>
                </User>

                <Main>
                    <h1>Todas as Listas</h1>
                    <Card/>
                    <Card/>
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
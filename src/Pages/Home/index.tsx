import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Wrapper, User, Main, Footer} from "./style"
import avatar from "../../Assets/img/avatar.png"
import {Logo} from "./style";

import {GrowingCard} from "./Components/GrowingCard";
import {ListField} from "./Components/ListField";
import Card from "../../Components/Card";

const NewTodo = () => (
    <GrowingCard alpha={"10"}>
        <ListField type={"todo"} value={{title:"Nova Tarefa"}}/>
    </GrowingCard>
)

const NewList = () => (
    <GrowingCard alpha={"10"}>
        <ListField type={"list"} value={{title:"Nova Lista"}}/>
        <NewTodo/>
    </GrowingCard>
)

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

                    <Card alpha={"10"}>
                        <ListField type={"list"} value={{title:"Lista 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 2"}}/>
                        <ListField type={"todo"} value={{title:"Todo 3"}}/>

                        <NewTodo/>
                    </Card>

                    <NewList/>


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
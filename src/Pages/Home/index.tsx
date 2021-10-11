import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Wrapper, Footer} from "./style"

import {GrowingCard} from "./Components/GrowingCard";
import {ListField} from "./Components/ListField";
import Card from "../../Components/Card";
import {Header} from "./Components/Header";
import {Nav} from "./Components/Nav";
import {Main} from "./Components/Main"

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

                <Nav/>

                <Header title={"Todas as Listas"} user={user} logout={logout}/>
                
                <Main>
                    <Card alpha={"10"}>
                        <ListField type={"list"} value={{title:"Lista 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 2"}}/>
                        <ListField type={"todo"} value={{title:"Todo 3"}}/>

                        <NewTodo/>
                    </Card>
                    <Card alpha={"10"}>
                        <ListField type={"list"} value={{title:"Lista 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 2"}}/>
                        <ListField type={"todo"} value={{title:"Todo 3"}}/>

                        <NewTodo/>
                    </Card>
                    <Card alpha={"10"}>
                        <ListField type={"list"} value={{title:"Lista 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 2"}}/>
                        <ListField type={"todo"} value={{title:"Todo 3"}}/>

                        <NewTodo/>
                    </Card>
                    <Card alpha={"10"}>
                        <ListField type={"list"} value={{title:"Lista 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 1"}}/>
                        <ListField type={"todo"} value={{title:"Todo 2"}}/>
                        <ListField type={"todo"} value={{title:"Todo 3"}}/>

                        <NewTodo/>
                    </Card>

                    <NewList/>

                </Main>

                <Footer/>
            </Wrapper>
        )
    } else {
        return <Redirect to={"/"}/>
    }
}

export default Home
import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Footer, Wrapper} from "./style"

import {GrowingCard} from "./Components/GrowingCard";
import {ListField} from "./Components/ListField";
import {Header} from "./Components/Header";
import {Nav} from "./Components/Nav";
import {Main} from "./Components/Main"
import {UserDataContextProvider} from "../../Context/UserDataContext";

const NewTodo = () => (
    <GrowingCard alpha={"10"}>
        <ListField type={"todo"} value={{title: "Nova Tarefa"}}/>
    </GrowingCard>
)

const NewList = () => (
    <GrowingCard alpha={"10"}>
        <ListField type={"list"} value={{title: "Nova Lista"}}/>
        <NewTodo/>
    </GrowingCard>
)

function Home() {
    const {user, logout} = useAuth()

    if (user) {
        return (
            <UserDataContextProvider user={user}>
                <Wrapper>
                    <Nav/>
                    <Header title={"Todas as Listas"} user={user} logout={logout}/>
                    <Main/>
                    <Footer/>
                </Wrapper>
            </UserDataContextProvider>
        )
    } else {
        return <Redirect to={"/"}/>
    }
}

export default Home
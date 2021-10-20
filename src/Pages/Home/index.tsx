import {useAuth} from "../../Hooks/useAuth";
import {Redirect} from "react-router-dom";

import {Wrapper} from "./style"

import {GrowingCard} from "./Components/GrowingCard";
import {ListField} from "./Components/ListField";
import {Header} from "./Components/Header";
import {Main} from "./Components/Main"
import {UserDataContextProvider} from "../../Context/UserDataContext";
import Logo from "../../Components/Logo";
import {Nav} from "./Components/Nav";
import {Footer} from "./Components/Footer";

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
                    <Logo/>
                    <Header title={"Todas as Listas"} user={user} logout={logout}/>
                    <Nav/>
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
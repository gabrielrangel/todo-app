import {Redirect} from "react-router-dom";

import {UserDataContextProvider} from "../../Context/UserDataContext";
import {useAuth} from "../../Hooks/useAuth";

import {Wrapper} from "./style"

import {Header} from "./Components/Header";
import {Main} from "./Components/Main"
import Logo from "../../Components/Logo";
import {Nav} from "./Components/Nav";
import {Footer} from "./Components/Footer";

function Home() {
    const {user, logout} = useAuth()

    return user
        ? (
            <UserDataContextProvider user={user}>
                <Wrapper>
                    <Logo/> <Header title={"Todas as Listas"} user={user} logout={logout}/>
                    <Nav/> <Main/>
                    <Footer/>
                </Wrapper>
            </UserDataContextProvider>
        )
        : <Redirect to={"/"}/>
}

export default Home
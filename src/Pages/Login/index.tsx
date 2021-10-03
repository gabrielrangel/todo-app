import {Redirect} from "react-router-dom"
import {FcGoogle} from "react-icons/fc"

import {useAuth} from "../../Hooks/useAuth";

// Components
import Logo from "../../Components/Logo"
import {Button, Footer, Main, Wrapper} from "./styles"
import illustration from "../../Assets/img/Wavy_Bus-03_Single-04.png"

function Login() {
    const {signInWithGoogle, user} = useAuth()

    if (user.uid) {
        return <Redirect to={"/home"}/>
    } else {
        return (
            <Wrapper>

                <img src={illustration} alt="Homem colando post-it num quadro" className={"illustration"}/>

                <Main>
                    <Logo/>
                    <Button
                        className={"selection-none"}
                        onClick={signInWithGoogle}
                    >
                        <FcGoogle/>
                        <div>Sign in with Google</div>
                    </Button>
                </Main>
                <Footer>
                    <a href='https://www.freepik.com/vectors/character' rel={"noreferrer"} target={"_blank"}>Character vector created by vectorjuice - www.freepik.com</a>
                </Footer>
            </Wrapper>
        )
    }
}


export default Login

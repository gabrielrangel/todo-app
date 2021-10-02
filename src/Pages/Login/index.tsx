import {Redirect} from "react-router-dom"
import {FcGoogle} from "react-icons/fc"

import {useAuth} from "../../Hooks/useAuth";
import {useTheme} from "../../Hooks/useTheme";

// Components
import Logo from "../../Components/Logo"
import {Button, Div, Wrapper} from "./styles"

function Login() {
    const {signInWithGoogle, user} = useAuth()
    const {darkModeToggle} = useTheme()

    if (user.uid) {
        return (
            <Redirect to={"/home"}/>
        )
    } else {
        return (
            <Wrapper>
                <Logo/>
                <div>Simple todo app</div>

                <button onClick={darkModeToggle}>Dark mode toggle</button>

                <Div>
                    <Button
                        className={"selection-none"}
                        onClick={signInWithGoogle}
                    >
                        <FcGoogle/>
                        <div>Sign in with Google</div>
                    </Button>
                </Div>
            </Wrapper>
        )
    }
}


export default Login

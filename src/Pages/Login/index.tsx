import styled from "styled-components";
import {FcGoogle} from "react-icons/fc"

import Logo from "../../Components/Logo"
import {useAuth} from "../../Context/useAuth";

function Login () {
    const {signInWithGoogle} = useAuth()
    return (
        <Wrapper>
            <Logo/>
            <div>Simple todo app</div>

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Div = styled.div`
  min-width: 300px;
  
  background-color: #f5f5f5;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 10px;
`

const Button = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
  padding: 10px;
  height: 50px;
  
  border-radius: 15px;
  border: solid 1px #f8f8f8;
  
  background-color: #fff;
  
  
  svg, path {
    height: 100%;
    width: auto;
  }
`

export default Login

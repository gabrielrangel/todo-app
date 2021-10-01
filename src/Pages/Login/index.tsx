import styled from "styled-components";

const Form = styled.form`
  min-height: 50vh;
  min-width: 300px;
  
  background-color: white;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 10px;
  
  strong {
    text-align: center;
  }
`

function Login () {
    return (
        <Form>
            <strong>Todo</strong>
            <div>Simple todo app</div>
            <button>Sign in with Google</button>
        </Form>
    )
}

export default Login
import styled from "styled-components";

const Style = styled.strong`
  margin: 30px 0;
  
  font-family: "Lobster", sans-serif;
  font-size: 3.5rem;
  
  text-align: center;
`

function Logo() {
    return (
        <Style className={"selection-none"}>Todo</Style>
    )
}

export default Logo
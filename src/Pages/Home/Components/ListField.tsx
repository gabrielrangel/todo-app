import styled from "styled-components";
import {useState} from "react";
import Card from "../../../Components/Card";

type ListFieldProps = {
    type: "list" | "todo",
    value: {title:string, done?:boolean},
}

const Style = styled(Card)<ListFieldProps>`
  background-color: ${({theme, type}) => type ==="list" ? "transparent" : theme.secondaryColor};
  align-items: center;
  padding: 5px 15px;
  
  flex-flow: row;
  
  flex-basis: 100%;
  
  input {
    background-color: transparent;
    border: none;
    border-radius: 50px;
    
    
    :focus {
      outline: none;
    }
  }
`

export function ListField(props: ListFieldProps){
    const [title, setTitle] = useState(props.value.title)
    return (
        <Style {...props} alpha={"10"}>
            {props.type === "todo" && <input type={"checkbox"}/>}
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </Style>
    )
}
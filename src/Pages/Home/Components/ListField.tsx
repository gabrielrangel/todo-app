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
  
  flex-flow: row;
  
  ${({type}) => type === "list" ? `
    * {
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-size: 1.5rem;
    }
  ` : `
    padding: 5px 15px;
  `}
  
  input {
    background-color: transparent;
    border: none;
    
    &[type=checkbox]{
      cursor: pointer;
      border-radius: 50%;
    }
    
    &[type=text]{
      align-self: stretch;
      max-width: 100%;
      flex: 2;
      width: 100px;
    }
    
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
            <input type={"text"} value={title} onChange={e => setTitle(e.target.value)}/>
        </Style>
    )
}
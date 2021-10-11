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

  border-radius: 0;
  
  flex-flow: row;
  
  ${({type, theme}) => type === "list" ? `
    * {
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-size: 1.8rem;
      margin: 15px 0;
    }
  ` : `
    * {
      color: ${theme.contrastAlt};
      margin: 5px 0;
    }
  `}
  
  *:first-child{
    margin-left: 15px;
  }
  
  *:last-child {
    margin-right: 15px;
  }
  
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
            <input placeholder={props.type === "todo" ? "Tarefa" : "Lista"} type={"text"} value={title} onChange={e => setTitle(e.target.value)}/>
            {props.type === "todo" && <input type={"checkbox"}/>}
        </Style>
    )
}
import styled from "styled-components";

type CardProps = {
    alpha?: string
}

export default styled.div<CardProps>`
  background-color: ${({theme}) => theme.emphasis}${({alpha}) => alpha || "FF" };
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  
  content: "";
  padding: 10px;
  gap: 10px;
`
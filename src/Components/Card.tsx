import styled from "styled-components";

export default styled.div`
  background-color: ${({theme}) => theme.primaryColor}20;
  border-radius: 20px;

  display: flex;
  
  content: "";
  
  min-height: 50px;
  min-width: 50px;

  padding: 10px;
`
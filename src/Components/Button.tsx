import styled from "styled-components";

export default styled.button`
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  overflow: hidden;

  align-content: center;

  background-color: ${({theme}) => theme.emphasis};
  min-width: 50px;
  min-height: 50px;
  transition: .5s;

  &, * {
    height: 100%;
    color: white !important;
    font-weight: 900;
  }

  :hover {
    background-color: ${({theme}) => theme.emphasis}dd;
  }
`
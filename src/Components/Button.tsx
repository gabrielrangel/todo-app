import styled from "styled-components";

type ButtonProps = {
    fill?: "primaryColor" | "emphasis" | "danger"
    selected?: boolean
}

export default styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

  min-width: 2vmax;
  min-height: 2vmax;

  border: none;
  border-radius: 100px;

  background-color: ${({fill, theme}) => fill && theme[fill] || theme.primaryColor};
  padding: 5px;

  & * {
    color: ${({theme, fill}) => !fill || fill === "primaryColor" ? theme.contrast : "white"};
  }

  span {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    text-align: left;
  }

  cursor: pointer;

  transition: 1s;

  &[value="selected"] {
    background-color: ${({theme, fill}) => fill === "primaryColor" ? theme.secondaryColor : theme.selected};
    cursor: default;
  }

  :not([value="selected"]):hover {
    background-color: ${
            ({theme, fill}) =>
                    !fill || fill === "primaryColor" ? theme.secondaryColor : `${theme[fill]}50`};
  }

  img,
  svg {
    min-width: 1vmax;
    flex: 0 0 30px;
    margin: 10px;
  }

  * {
    flex: 1;
  }
`
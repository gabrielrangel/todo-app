import styled from "styled-components";

type ButtonProps = {
    fill?: "primaryColor" | "emphasis" | "danger"
    selected?: boolean
}

export default styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px;
  border: none;
  border-radius: 100px;

  background-color: ${({fill, theme}) => fill && theme[fill] || theme.primaryColor};

  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: left;
  color: ${({theme, fill}) => !fill || fill === "primaryColor" ? theme.contrast : "white"};

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
    max-height: 30px;
    margin: 5px;
  }
`
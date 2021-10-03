import styled, {StyledComponentProps} from "styled-components";
import {useTheme} from "../Hooks/useTheme";

type LogoProps = {
    isDarkMode: boolean
}

const Style = styled.strong<LogoProps>`
  font-family: "Lobster", sans-serif;
  font-size: 3.5rem;
  
  text-align: center;
  
  color: ${({isDarkMode, theme}) => isDarkMode ? theme.secondaryColor : theme.primaryColor};
`

function Logo() {
    const {isDarkMode} = useTheme()

    return (
        <Style className={"selection-none"} isDarkMode={isDarkMode}>Todo</Style>
    )
}

export default Logo
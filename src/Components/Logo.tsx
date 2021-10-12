import styled from "styled-components";
import {useTheme} from "../Hooks/useTheme";

type LogoProps = {
    isDarkMode: boolean
}

const Style = styled.strong<LogoProps>`
  font-family: "Lobster", sans-serif;
  font-size: 5rem;

  text-align: center;

  color: ${({theme}) => theme.emphasis};

  grid-area: logo;
`

function Logo() {
    const {isDarkMode} = useTheme()

    return (
        <Style className={"selection-none"} isDarkMode={isDarkMode}>To-do!</Style>
    )
}

export default Logo
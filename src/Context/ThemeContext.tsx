import {createContext, ReactNode, useEffect, useState} from "react";
import {darkTheme, lightTheme} from "../Style/theme";
import {StyledProps, ThemeProvider} from "styled-components";
import {GlobalStyle} from "../Style";
import styled from "styled-components";
import {CgDarkMode} from "react-icons/cg"

type ThemeContextValue = {
    darkModeToggle: VoidFunction,
    isDarkMode: boolean
}

type ThemeContextProviderProps = {
    children:ReactNode
}

type DarkModeToggleProps = {
    onClick: VoidFunction
}

export const ThemeContext = createContext({} as ThemeContextValue)

export function ThemeContextProvider(props:ThemeContextProviderProps) {
    const browserPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const [isDarkMode, setIsDarkMode] = useState(browserPrefersDark)

    const [theme, setTheme] = useState(isDarkMode ? darkTheme : lightTheme)

    const darkModeToggle = () => {setIsDarkMode(prevState => !prevState)}

    useEffect(()=>{
        setTheme(isDarkMode ? darkTheme : lightTheme)
    },[isDarkMode])

    return (
        <ThemeContext.Provider value={{darkModeToggle, isDarkMode}}>
            <ThemeProvider theme={theme}>
                <DarkModeToggle onClick={darkModeToggle}/>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

function DarkModeToggle (props:DarkModeToggleProps) {
    const Style = styled.button<DarkModeToggleProps>`
      position: absolute;
      left: calc(100vw - 4vmax);
      top: 0;
      z-index: 10;
      content: "";
      width: 3vmax;
      height: 3vmax;
      background-color: #34376B10;
      border: none;
      border-bottom-right-radius: 50px;
      border-bottom-left-radius: 50px;
    `
    return (
        <Style {...props}><CgDarkMode/></Style>
    )
}
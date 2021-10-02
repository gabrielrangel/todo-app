import {createContext, ReactNode, useEffect, useState} from "react";
import {darkTheme, lightTheme} from "../Style/theme";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../Style";

type ThemeContextValue = {
    darkModeToggle: VoidFunction
}

type ThemeContextProviderProps = {
    children:ReactNode
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
        <ThemeContext.Provider value={{darkModeToggle}}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
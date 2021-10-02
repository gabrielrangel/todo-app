import {createGlobalStyle} from "styled-components";
import {Theme} from "./theme";

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

export const GlobalStyle =  createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    body {
      background-image: ${({theme}) => theme.bodyGradient};
      background-color: ${({theme}) => theme.bodyBackground};
    }
    
    #root {
      width: 100vw;
      min-height: 100vh;
      
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .selection-none {
      user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
    }
`
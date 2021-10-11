export type Theme = {
    primaryColor:string,
    secondaryColor:string,
    emphasis:string,
    emphasisAlt:string,
    contrast: string,
    contrastAlt: string;
}

export const lightTheme:Theme = {
    primaryColor: "rgb(232, 235, 244)",
    secondaryColor: "rgb(255, 255, 255)",
    emphasis: "rgb(114,69,255)",
    emphasisAlt: "rgb(231, 0, 120)",
    contrast: "rgb(40, 42, 46)",
    contrastAlt: "rgb(118,116,140)",
}

export const darkTheme:Theme = {
    primaryColor: "rgb(29, 29, 31)",
    secondaryColor: "rgb(62, 61, 64)",
    emphasis: "rgb(114,69,255)",
    emphasisAlt: "rgb(255, 226, 79)",
    contrast: "rgb(255, 255, 255)",
    contrastAlt: "rgb(123,129,143)",
}
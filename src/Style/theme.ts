export type Theme = {
    primaryColor:string,
    secondaryColor:string,
    emphasis:string,
    danger:string,
    contrast: string,
    contrastAlt: string;
}

export const lightTheme:Theme = {
    primaryColor: "#e8ebf4",
    secondaryColor: "#ffffff",
    emphasis: "#7245ff",
    danger: "#e70078",
    contrast: "#282a2e",
    contrastAlt: "#76748c",
}

export const darkTheme:Theme = {
    primaryColor: "#1d1d1f",
    secondaryColor: "#3e3d40",
    emphasis: "#7245ff",
    danger: "#ffe24f",
    contrast: "#ffffff",
    contrastAlt: "#7b818f",
}
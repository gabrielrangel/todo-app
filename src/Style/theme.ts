export type Theme = {
    primaryColor: string,
    secondaryColor: string,
    emphasis: string,
    danger: string,
    selected: string,
    contrast: string,
    contrastAlt: string;
}

export const lightTheme: Theme = {
    primaryColor: "#fefefe",
    secondaryColor: "#f3f3f3",
    emphasis: "#2300d1",
    selected: "#00ecbf",
    danger: "#e70078",
    contrast: "#282a2e",
    contrastAlt: "#76748c",
}

export const darkTheme: Theme = {
    primaryColor: "#1d1d1f",
    secondaryColor: "#3e3d40",
    emphasis: "#2300d1",
    selected: "#00ecbf",
    danger: "#ffe24f",
    contrast: "#ffffff",
    contrastAlt: "#7b818f",
}
export type Theme = {
    gradient:string,
    primaryColor:string,
    secondaryColor:string,
    emphasis:string,
    contrast: string
}

export const lightTheme:Theme = {
    gradient: "linear-gradient(138deg, rgba(52,55,107,1) 0%, rgba(0,0,0,1) 100%)",
    primaryColor: "rgb(52, 55, 107)",
    secondaryColor: "rgb(255, 185, 58)",
    emphasis: "rgb(225, 137, 220)",
    contrast: "rbg(255, 255, 255)"
}

export const darkTheme:Theme = {
    gradient: "linear-gradient(138deg, rgba(52,55,107,1) 0%, rgba(0,0,0,1) 100%)",
    primaryColor: "#34376B",
    secondaryColor: "#FFB93A",
    emphasis: "#E189DC",
    contrast: "#FFFFFF",
}
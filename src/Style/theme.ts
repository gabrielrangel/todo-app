export type Theme = {
    bodyGradient:string,
    bodyBackground:string
}

export const lightTheme:Theme = {
    bodyGradient: "background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);",
    bodyBackground: "#e9e9e7"
}

export const darkTheme:Theme = {
    bodyGradient: "background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);",
    bodyBackground: "#485563"
}

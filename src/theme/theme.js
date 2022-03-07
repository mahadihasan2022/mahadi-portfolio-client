import { createGlobalStyle } from "styled-components"

export const darkTheme = {
    bodyBg: '#303030',
    bodyText: '#dbdbdb'
}
export const lightTheme = {
    bodyBg: '#dbdbdb',
    bodyText: '#303030'
}
export const GlobalStyles = createGlobalStyle `
    body{
        background: ${props => props.theme.bodyBg};
        color: ${props => props.theme.bodyText};
    }
`
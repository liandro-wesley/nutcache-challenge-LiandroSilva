import theme from './src/styles/Theme';

type Theme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
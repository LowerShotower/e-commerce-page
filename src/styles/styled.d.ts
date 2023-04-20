// styled.d.ts
import 'styled-components'
interface IPalette {
  main: string
  contrastText: string
}
// we'll use a very simple theme with  palette and colors
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    borderRadius: string
    bodyColor: string
    textColor: string
    palette: {
      common: {
        black: string
        white: string
        frenchGray: string
        peach: string
        charcoal: string
        timberwolf: string
        dogwood: string
        azure: string
        blue: string
        oxford: string
        thistle: string
        celeste: string
      }
      primary: {
        main: string
        contrastText: string
      }
      secondary: {
        main: string
        contrastText: string
      }
      ternary: {
        main: string
        contrastText: string
      }
    }
    space: {
      '2': string
      '4': string
      '8': string
      '12': string
      '16': string
      '20': string
      '24': string
      '1x': string
      '2x': string
      '3x': string
      '4x': string
      '1/2': string
      '1/3': string
      '2/3': string
      '1/4': string
    }
    sizes: {
      xs2: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xl2: string
      xl3: string
      xl4: string
    }
  }
}

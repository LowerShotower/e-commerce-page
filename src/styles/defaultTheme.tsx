import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
  name: 'default',
  borderRadius: '8px',
  borderRadiusSmall: '4px',
  bodyColor: '#ffffff',
  textColor: '#0a0a0a',
  palette: {
    common: {
      black: '#0b0c0d',
      white: '#ffffff',
      frenchGray: '#ADB6C4',
      peach: '#FFC49B',
      charcoal: '#F1F2F6',
      timberwolf: '#D6CFCB',
      dogwood: '#F5E7E5',
      azure: '#F2FDFF',
      blue: '#F4F8EC',
      oxford: '#101935',
      thistle: '#DBCBD8',
      celeste: '#BAF5FF',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
    ternary: {
      main: '#FFEFD3',
      contrastText: '#ffffff',
    },
  },
  space: {
    '2': '2px',
    '4': '4px',
    '8': '8px',
    '12': '12px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '1x': '1rem',
    '2x': '2rem',
    '3x': '3rem',
    '4x': '4rem',
    '1/2': '.5rem',
    '1/3': '.33rem',
    '2/3': '.66rem',
    '1/4': '.25rem',
  },
  sizes: {
    xs2: '280px',
    xs: '320px',
    sm: '480px',
    md: '720px',
    lg: '920px',
    xl: '1200px',
    xl2: '1400px',
    xl3: '1600px',
    xl4: '1800px',
  },
}

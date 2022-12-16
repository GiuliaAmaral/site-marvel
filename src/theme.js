import { createTheme } from '@mui/material';


let theme = createTheme({});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#ED1B24',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    h1: {
      fontFamily: "'Oswald', sans-serif",
      fontWeight: '700',
      [theme.breakpoints.only("xs")]: {
        fontSize: "4rem",
      },
    },
    h2: {
      fontFamily: "'Oswald', sans-serif",
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif;",
    },
    p: {
      fontFamily: "'Open Sans', sans-serif;",
    },
    button: {
      fontFamily: "'Open Sans', sans-serif;",
      fontWeight: 700
    },
  }
})

export default theme;

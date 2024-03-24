import { createTheme, rgbToHex } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#60a425',
    },
    secondary: {
      main: '#282a2b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    // button: {
    //   fontStyle: 'italic',
    // },
  },
});

export default theme;

import { createTheme, rgbToHex } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#62A527',
    },
    secondary: {
      main: '#C5D3D8',
    },
    info: {
      main: '#6DC0D5',
    },
    error: {
      main: '#F16A73',
    },
    warning: {
      main: '#F1BD6A',
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

console.log(JSON.stringify(theme));

export default theme;


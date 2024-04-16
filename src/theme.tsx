import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import Color from 'color';
import chroma from 'chroma-js';

// A custom theme for this app
 createTheme({
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

const theme = extendTheme({
  colorSchemes: {
    light: { // palette for light mode
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
      }
    },
    dark: { // palette for dark mode
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
      }
    }
  }
})


// console.log(theme.palette.augmentColor({
//   color: {
//     main: '#62A527',
//   },
//   name: 'cropster-green',
// }));
console.log(JSON.stringify(theme));

export default theme;

const primaryColor = '#62A527'; // Your custom color

const shades = {
  50: chroma(primaryColor).brighten(1.5).hex(),
  100: chroma(primaryColor).brighten(1.3).hex(),
  200: chroma(primaryColor).brighten(1.1).hex(),
  300: chroma(primaryColor).brighten(0.9).hex(),
  400: chroma(primaryColor).brighten(0.7).hex(),
  500: primaryColor,
  600: chroma(primaryColor).darken(0.7).hex(),
  700: chroma(primaryColor).darken(0.9).hex(),
  800: chroma(primaryColor).darken(1.1).hex(),
  900: chroma(primaryColor).darken(1.3).hex(),
};

console.log(shades);
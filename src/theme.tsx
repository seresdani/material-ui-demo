import { createTheme, experimental_extendTheme as extendTheme } from '@mui/material/styles';

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


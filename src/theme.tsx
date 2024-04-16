import { createTheme, rgbToHex } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme(theme, (() => {
  console.log(
    theme.palette.augmentColor({
      color: {
        main: '#62A527',
      },
      name: 'cropster-green',
    })
  )

  return {
    palette: {
      primary: {
        main: '#62A527',
      },
      secondary: {
        main: '#C5D3D8',
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
  }
})());

export default theme;


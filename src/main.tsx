import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import theme from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledEngineProvider injectFirst>
        {/* <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider> */}

        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <App />
        </CssVarsProvider>
      </StyledEngineProvider>
    </LocalizationProvider>
  </React.StrictMode>,
);

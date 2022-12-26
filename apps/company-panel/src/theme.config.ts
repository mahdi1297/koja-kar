import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#0052cc',
      dark: '#ccc',
      contrastText: '#fff',
    },
    success: {
      main: '#006644',
    },
    background: {
      default: '#ccc',
      paper: '#ccc',
    },
    grey: {},
  },
});

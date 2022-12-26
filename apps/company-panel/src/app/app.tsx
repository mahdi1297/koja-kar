import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignupComponent from './pages/signup/signup.component';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { theme } from '../theme.config';
import { rtlTheme } from '../rtl-theme.config';
import './../styles.scss';

export function App() {
  return (
    <CacheProvider value={rtlTheme}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/signup"
            element={
              <SignupComponent />
            }
          />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

import './App.css';
import Scoreboard from './comp/Scoreboard';
import GameStatus from './comp/GameStatus';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import SecondPage from './comp/SecondPage';
import Header from './comp/Header';

function App() {

  // document.addEventListener('touchmove', function (e) {
  //   e.preventDefault();
  // }, { passive: false });

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(172,11,11)',
      },
      secondary: {
        main: 'rgb(0, 0, 0)',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>

      <SecondPage />

    </ThemeProvider>
  );
}

export default App;
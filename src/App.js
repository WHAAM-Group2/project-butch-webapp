import './App.css';
import Scoreboard from './comp/Scoreboard';
import GameStatus from './comp/GameStatus';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import SecondPage from './comp/SecondPage';
import Header from './comp/Header';
import { useState } from 'react';
import FirstPage from './comp/FirstPage';

function App() {

  const [username, setUsername] = useState(null);
  const [displayPage, setDisplayPage] = useState(<FirstPage setUsername={setUsername} />)

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(118, 18, 23)',
      },
      secondary: {
        main: 'rgb(0, 0, 0)',
      },
    },
  })


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {displayPage}
        {displayPage.type === FirstPage ? <Button style={{
          minHeight: "100px",
          margin: "50px",
        }} variant='contained' onClick={() => setDisplayPage(<SecondPage username = {username} />)}>Start</Button> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;


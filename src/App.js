import './App.css';
import Scoreboard from './comp/Scoreboard';
import GameStatus from './comp/GameStatus';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import SecondPage from './comp/SecondPage';
import Header from './comp/Header';
import { useState, useEffect } from 'react';
import FirstPage from './comp/FirstPage';

function App() {

  const [username, setUsername] = useState(null);
  const [displayPage, setDisplayPage] = useState(<FirstPage setUsername={setUsername} />)
  const [bogusWord, setBogusWord] = useState(false);

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

  const swear = [
    'bitch',
    'whore',
    'asshole',
    'bastard',
    'cock',
    'pussy',
    'hoe',
    'retard',
    'crap',
    'shit',
    'fuck',
  ]

  const bogusCheck = (nameOfUser) =>{
      swear.includes(nameOfUser.toLowerCase()) ? setBogusWord(true) : setBogusWord(false)
    
  }

  useEffect(() => { 
    bogusCheck(username)
  }, [username])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {displayPage}
        {displayPage.type === FirstPage ? <Button style={{
          minHeight: "100px",
          margin: "50px",
        }} variant='contained' disabled={!username || bogusWord} onClick={() => setDisplayPage(<SecondPage username = {username} />)}>Start</Button> : null}
      </div>
    </ThemeProvider>

    
  );

  
}

export default App;


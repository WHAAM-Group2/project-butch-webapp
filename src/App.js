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
  const [errorMessage, setErrorMessage] = useState("");
  const [displayPage, setDisplayPage] = useState(<FirstPage setUsername={setUsername} errorMessage={errorMessage} />)

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
    'dick',
    'bastard',
    'cock',
    'pussy',
    'hoe',
    'retard',
    'crap',
    'shit',
    'fuck',
  ]

  //This function checks so the username doesnt contain swearwords and uppercases
  const bogusCheck = (nameOfUser) =>{
    if(typeof nameOfUser === "string"){ 
      if(nameOfUser !== nameOfUser.toLowerCase() || swear.includes(nameOfUser.toLowerCase())){
        
        setErrorMessage("Only lowercases and no swear words!");
      }
      else{
        setErrorMessage("");
      }
    }
  }

  useEffect(() => { 
    bogusCheck(username)
  }, [username])

  useEffect(() => {
    setDisplayPage(<FirstPage setUsername={setUsername} errorMessage={errorMessage} />)

  }, [errorMessage])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {displayPage}

        {displayPage.type === FirstPage ? <Button style={{
          minHeight: "100px",
          margin: "50px",
        }} variant='contained' disabled={!username || errorMessage !== ""} onClick={() => setDisplayPage(<SecondPage username = {username} />)}>Start</Button> : null}

      </div>
    </ThemeProvider>

    
  );

  
}

export default App;


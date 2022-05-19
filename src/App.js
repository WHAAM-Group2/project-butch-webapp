import './App.css';
import Scoreboard from './comp/Scoreboard';
import GameStatus from './comp/GameStatus';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import SecondPage from './comp/SecondPage';
import Header from './comp/Header';
import { useState, useEffect } from 'react';
import FirstPage from './comp/FirstPage';
import useGetGameStatus from './hooks/useGetGameStatus';

function App() {

  const [username, setUsername] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [displayPage, setDisplayPage] = useState(<FirstPage setUsername={setUsername} errorMessage={errorMessage} />)

  const gameStatus = useGetGameStatus();

  const host = window.location.hostname

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
  const bogusCheck = (nameOfUser) => {
    if (typeof nameOfUser === "string") {
      if (swear.map(word => nameOfUser.toLowerCase().includes(word)).includes(true)) {

        setErrorMessage("No swear words!");
        // console.log(errorMessage)
      }
      else {
        if (gameStatus && !gameStatus.status) {
          setErrorMessage("");
        }
      }
    }


  }

  const handleStartGame = () => {

    fetch(`http://${host}:5000/api/start_game`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        username: username
      }) // body data type must match "Content-Type" header
    }) // parses response to JSON

    // setErrorMessage("")
    setDisplayPage(<SecondPage username={username} />)

  }

useEffect(() => {
  bogusCheck(username)
}, [username])

useEffect(() => {
  if (gameStatus && gameStatus.status && gameStatus.username !== username) {
    setErrorMessage("Someone is playing!")
  } else{
    
    bogusCheck(username)

  }
}, [gameStatus])


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
      }} variant='contained' disabled={!username || errorMessage !== ""} onClick={handleStartGame}>Start</Button> : null}

    </div>
  </ThemeProvider>
);
}

export default App;


import React from 'react'
import useStartGame from '../hooks/useStartGame'
import GameStatus from './GameStatus'
import Header from './Header'
import Scoreboard from './Scoreboard'

function SecondPage(username) {

  const game = useStartGame(username);

  return (
    <div className="second-page">

      
      <GameStatus username = {username} />
      <Scoreboard username = {username}/>
      

    </div>
  )
}

export default SecondPage
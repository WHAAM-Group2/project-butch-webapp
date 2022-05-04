import React from 'react'
import GameStatus from './GameStatus'
import Header from './Header'
import Scoreboard from './Scoreboard'

function SecondPage(username) {

  return (
    <div className="second-page">

      
      <GameStatus username = {username} />
      <Scoreboard username = {username}/>
      

    </div>
  )
}

export default SecondPage
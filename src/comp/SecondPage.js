import React from 'react'
import GameStatus from './GameStatus'
import Header from './Header'
import Scoreboard from './Scoreboard'

function SecondPage() {
  return (
      <div className="App">

          <Header />

          <GameStatus />
          <Scoreboard />

      </div>
  )
}

export default SecondPage
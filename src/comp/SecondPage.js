import React from 'react'
import useStartGame from '../hooks/useStartGame'
import GameStatus from './GameStatus'
import Header from './Header'
import Scoreboard from './Scoreboard'

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This component handles the layout of the webapplications seconds page. Here two component calls are made to be shown in the second page. The first component thats called is GameStatus.js and the other is Scoreboard.js
 * @param {*} username is the username thats the player used to start the game with
 * @returns The whole component and its informations is returned.
 */
function SecondPage(username) {

  // const game = useStartGame(username);

  return (
    <div className="second-page">

      
      <GameStatus username = {username} />
      <Scoreboard username = {username}/>
      

    </div>
  )
}

export default SecondPage
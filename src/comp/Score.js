import React from 'react'

function Score(game, index) {

    return (
        <div className="score">
            {game.game.player}
        </div>
    )
}

export default Score
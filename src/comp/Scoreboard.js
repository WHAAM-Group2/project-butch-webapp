import { Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material';
import React from 'react'
import useApi from '../hooks/useApi';
import Score from './Score';

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This component contains the design for the scoreboard shown in the second page of the webapplication and also does a API call to the python-server which then returns data about players score in the game 
 * @param {*} username is the username that the player started the game with.
 * @returns 
 */
function Scoreboard({username}) {

    const scoreboard = useApi("get_scoreboard");

    return (
        <div className="scoreboard">
            < Paper style={{
                textAlign: "center",
            }}>

                <h1>SCOREBOARD</h1>

                <List style={{ overflow: "scroll" }}>
                    {scoreboard &&

                        new Map(Object.entries(scoreboard)).get("games").map((game, index) => {

                            return (

                                <div>
                                    <Divider />

                                    <List component={Stack} direction="row">
                                        <ListItem style={{
                                            textAlign: "center",
                                        }}>

                                            <ListItemText>
                                                <b>{index + 1}</b>
                                            </ListItemText>
                                            <Divider orientation="vertical" flexItem />

                                            <ListItemText>
                                                {username.username === game.player ? <u><b>{game.player}</b></u> : game.player}
                                            </ListItemText>

                                        </ListItem>

                                        <Divider orientation="vertical" flexItem />
                                        <ListItem style={{
                                            textAlign: "center",
                                        }}>
                                            <ListItemText>
                                                {game.score} seconds
                                            </ListItemText>
                                        </ListItem>
                                    </List>

                                </div>
                            )
                        })}
                </List>

            </Paper >
        </div>
    )
}

export default Scoreboard


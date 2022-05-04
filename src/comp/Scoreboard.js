import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import useApi from '../hooks/useApi';


function Scoreboard() {

    const scoreboard = useApi("get_scoreboard");

    return (
        <Paper style={{
            margin: "5%",
            textAlign: "center",
            marginBottom: "15%",
        }}

            // sx={{
            //     backgroundColor: "rgb(172,11,11)",
            // }}

        >

            <h2>
                Scoreboard
            </h2>

            <List style={{ maxHeight: '100%', overflow: 'auto' }}>
                {scoreboard &&

                    new Map(Object.entries(scoreboard)).get("games").map((game) => {
                        return (

                            <ListItem key={game.player} style={{
                                textAlign: "center",
                            }}>
                                <ListItemText>
                                    {game.player}
                                </ListItemText>
                                <ListItemText>
                                    {game.score}
                                </ListItemText>
                            </ListItem>

                        )
                    })}
            </List>

        </Paper>
    )
}

export default Scoreboard
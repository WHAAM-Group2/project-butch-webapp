import { Paper, TextField } from '@mui/material'
import React from 'react'

function FirstPage({setUsername}) {

    return (
        <Paper style={{
            margin: "5%",
            padding: "10px",
            textAlign: "center",
            // maxHeight: "70%",
            display: "flex",
            // maxHeight: "100%",
            flexDirection: "column",
        }}>

            <div>
                <h1>
                    Welcome to the game!
                </h1>

                <p>
                    <u><h3>Rules</h3></u> <br />

                    <ul style={{
                        textAlign: "left",
                    }}>
                        <li>
                            Place yourself on the marked position
                        </li>
                        <li>
                            Write your username in the text field
                        </li>

                        <li>
                            Click the button to start the game
                        </li>

                        <li>
                            Try to get <b>BUTCH</b>'s snack. To win, you must stop moving when <b>BUTCH</b> is about to turn his head! <br /> <u><i>HINT: listen to the music!</i></u>
                        </li> 

                    </ul>

                </p>
            </div>

            <TextField onChange={e => setUsername(e.target.value)} label="Username"></TextField>

        </Paper>
    )
}

export default FirstPage
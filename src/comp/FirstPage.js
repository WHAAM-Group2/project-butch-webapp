import { Paper, TextField } from '@mui/material'
import React from 'react'

function FirstPage({ setUsername, errorMessage }) {

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
                    Beat <b style={{ color: "var(--secondary)" }}>BUTCH</b> and claim your prize!
                </h1>

                <p>

                    <u><h3>HOW TO PLAY</h3></u> <br />
                    <b>BUTCH</b> is guarding his snack for later... But you have a chance to steal it! <br /> <br />
                    When music is playing, you have a chance to walk towards the prize! <br />
                    If the music stops, <b>BUTCH</b> will turn around and watch you... <br />
                    <br />

                    <b>IF YOU MOVE, YOU LOSE!</b> <br /> <br />

                    <u><h3>Rules</h3></u> 

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
                            Press START
                        </li>

                        {/* <li>
                            Try to get <b>BUTCH</b>'s snack. To win, you must stop moving when <b>BUTCH</b> turns his head towards you! <br /> <u><i>HINT: listen to the music!</i></u>
                        </li> */}

                    </ul>

                </p>
            </div>

            <TextField onChange={e => setUsername(e.target.value)} label="Username"></TextField>
            <p style={{ color: "#761217" }} >{errorMessage}</p>

        </Paper>
    )
}

export default FirstPage

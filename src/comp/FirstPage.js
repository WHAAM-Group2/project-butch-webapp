import { Paper, TextField } from '@mui/material'
import React, { useEffect } from 'react'

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This component handles information thats to be shown in the first page in the 
 * webapplication and listens for changes in the field where players inputs their username.
 * @param {*} setUsername is where the players inputs are allocate continuously
 * @param {*} errorMessage is the error messages to be shown while players inputs usernames that's not allowed 
 * @returns the whole component and its information is returned
 */
function FirstPage({setUsername, errorMessage}) {

    useEffect(() => {
        setUsername(null)
    }, [])

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
                    Beat <b style={{color: "var(--secondary)"}}>BUTCH</b> and claim your prize!
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
                            When the game is ready for you, press START
                        </li>

                        <li>
                            Try to get <b>BUTCH</b>'s snack. To win, you must stop moving when <b>BUTCH</b> turns his head towards you! <br /> <u><i>HINT: listen to the music!</i></u>
                        </li> 

                    </ul>

                </p>
            </div>
            
            
            <TextField onChange={e => setUsername(e.target.value)} label="Username"></TextField>
            <p style={{color:"#761217"}} >{errorMessage}</p>

        </Paper>
    )
}

export default FirstPage

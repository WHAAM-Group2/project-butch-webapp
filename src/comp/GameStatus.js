import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useGetPlayerStatus from '../hooks/useGetPlayerStatus';

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * Is a component that gets information from another component called useGetPlayerStatus and shows that information in a contained box if the player is playing, has lost or won. 
 * @param {*} username is the username that the player has entered in the first page 
 * @returns the whole component and its information is returned
 */
function GameStatus(username) {

    var stat = useGetPlayerStatus(username.username.username)
    
    return (
        <div className="gamestatus">

            < Paper style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
            }}

                sx={{
                    backgroundColor: stat ? stat && stat['status'] === ("playing" || "win") ? "var(--tertiary)" : "var(--primary)" 
                    : "var(--secondary)",
                    color: "white"
                }}

            >
                {stat ? 

                    stat['status'] === "playing" ? "Playing!" : stat['status'] === "win" ? "You won!" : "You lost..." : "Waiting"

                }
                
                    {/* // stat['status'] === "playing" ? "Playing!" : "Waiting..." : "Loading..."} */}

            </Paper >

        </div>
    )
}

export default GameStatus

//     < Paper style = {{
//     margin: "5%",
//         padding: "10px",
//             textAlign: "center",
//                 justifyContent: "center",
//                     alignItems: "center",
//                         display: "flex",
//                             flexDirection: "column",
//             // minHeight: "100%",
//         }}

// sx = {{
//     backgroundColor: stat && stat['status'] === "playing" ? "green" : "rgb(50, 50, 100)",
//         color: "white"
// }}

//         >
//     { stat? stat['status']: "Loading..." }
//         </Paper >
import { Paper, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import useGetPlayerStatus from '../hooks/useGetPlayerStatus';

function GameStatus(username) {

    var host = "192.168.50.30:5000"

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
                    backgroundColor: stat ? stat && stat['status'] === "playing" ? "var(--tertiary)" : "var(--primary)" 
                    : "var(--secondary)",
                    color: "white"
                }}

            >
                {stat ? 
                
                    stat['status'] === "playing" ? "Playing!" : "Waiting..."
                
                : "Loading..."}

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
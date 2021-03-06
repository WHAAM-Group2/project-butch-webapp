// A hook to get the game status

import { useState, useEffect } from "react";

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This function communicates with the python server to get the current game status.
 * @returns the information sent from the python server
 */
function useGetGameStatus() {

    const [response, setResponse] = useState(null);

    var host = window.location.hostname;

    const handleApiCall = () => {

        fetch(`http://${host}:5000/api/get_game_ready_status`).then(res => res.json()).then(data => {
            setResponse(data.status);
        }).catch(err => {
            console.log(err);
        }
        );
    }

    useEffect(() => {

        setInterval(() => {
            handleApiCall();
        }
            , 1000);
    }, []);

    return response;

}

export default useGetGameStatus;
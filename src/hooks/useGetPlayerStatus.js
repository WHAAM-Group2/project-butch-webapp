import { useState, useEffect } from 'react';

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This functions communicates with the python server to get the current playing players status
 * @param {*} player is the player thats matches the information found in the database 
 * @returns the data about the current players status
 */
const useGetPlayerStatus = (player) => {

    const [response, setResponse] = useState(null);
    var host = window.location.hostname

    const handleApiCall = () => {

        fetch(`http://${host}:5000/api/get_game_status`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                username: player
            }) // body data type must match "Content-Type" header
        }).then(beep => beep.json()).then(data => setResponse(data)); // parses response to JSON


    }


    useEffect(() => {
        
        setInterval(() => {
            handleApiCall();
        }, 1000);

    }, []);

    return response;

}

export default useGetPlayerStatus;
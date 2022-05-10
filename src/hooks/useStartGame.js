import { useState, useEffect } from 'react';

const useStartGame = (player) => {

    const [response, setResponse] = useState(null);
    var host = window.location.hostname

    const handleApiCall = () => {

        fetch(`http://${host}:5000/api/start_game`, {
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
                username: player.username
            }) // body data type must match "Content-Type" header
        }).then(beep => beep.json()).then(data => setResponse(data)); // parses response to JSON


    }

    useEffect(() => {
        handleApiCall()

      
    }, [])
    

    return response;

}

export default useStartGame;
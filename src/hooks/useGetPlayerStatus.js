import { useState, useEffect } from 'react';

const useGetPlayerStatus = (player) => {

    const [response, setResponse] = useState(null);
    var host = "192.168.0.7:5000"

    const handleApiCall = () => {

        fetch(`http://${host}/api/get_game_status`, {
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
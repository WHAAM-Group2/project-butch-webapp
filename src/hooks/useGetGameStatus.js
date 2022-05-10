// A hook to get the game status

import { useState, useEffect } from "react";

function useGetGameStatus() {

    const [response, setResponse] = useState(null);

    var host = "127.0.0.1:5000";

    const handleApiCall = () => {

        fetch(`http://${host}/api/get_game_ready_status`).then(res => res.json()).then(data => {
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
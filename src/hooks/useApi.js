import { useState, useEffect } from 'react';

const useApi = (target) => {

    const [response, setResponse] = useState(null);
    
    var host = "192.168.50.30:5000"

    const handleApiCall = () => {

        fetch(`http://${host}/api/${target}`).then(res => res.json()).then(data => {
            setResponse(data);
        }).catch(err => {
            console.log(err);
        });

    }

    useEffect(() => {

        setInterval(() => {
            handleApiCall();
        }, 1000);

    }, []);

    return response;

}

export default useApi;
import { useState, useEffect } from 'react';

/**
 * @Author Adam Joseph & Wael Mahrous
 * 
 * This function is used to make a API call to the python server to able communication. 
 * @param {*} target 
 * @returns 
 */
const useApi = (target) => {

    const [response, setResponse] = useState(null);
    
    var host = window.location.hostname;

    const handleApiCall = () => {

        fetch(`http://${host}:5000/api/${target}`).then(res => res.json()).then(data => {
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
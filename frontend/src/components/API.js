import config from '../config/config.dev.json';
import axios from 'axios';

const { backendURL } = config;

const getAutoCompleteSuggestion = (query) => { 
    return axios({
        method: 'GET',
        url: `${backendURL}/suggest`,
        params: {
            keyword: query
        }
    }).then((response) => {
        return response;
    }).catch((e) => {
        throw Error(e.message);
    });
};

export {
    getAutoCompleteSuggestion
};
import axios from 'axios';

const wikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json';

const wiki = axios.create({
    baseURL: wikiAPI,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
});

export default wiki;
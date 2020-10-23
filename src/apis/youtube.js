import axios from 'axios';
const KEY = 'AIzaSyBMppUfQrD_91QeLz783gsr8uD7-0Johlw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
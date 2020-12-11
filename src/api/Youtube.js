import axios from 'axios';
const KEY = 'AIzaSyAq4bbeBxgiKZq5e9V976pPx34JUnRQno4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params : {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
		chart: 'mostPopular'
	}
});

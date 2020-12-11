import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID YzXJDy6a1qYZY_bHb8S6L1K4PEN9vLuZOPd1aNXs_3c'
	}
});

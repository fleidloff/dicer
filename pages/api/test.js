import Pusher from 'pusher';
import publicSettings from '../../config/pusher.json';

import dotenv from 'dotenv';
// todo: move dotenv config somewhere else
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const secretSettings = {
	appId: process.env.PUSHER_APP_ID,
	secret: process.env.PUSHER_SECRET
};

const pusher = new Pusher({ ...secretSettings, ...publicSettings });

export default async function(req, res) {
	let promise = new Promise((resolve, reject) => {
    	const timeout = setTimeout(() => {
			res.statusCode = 200
			res.setHeader('Content-Type', 'application/json')
	  		res.end(JSON.stringify({ some: "timeout" }))
		}, 3000);

		pusher.trigger('my-channel', 'my-event', {
	  		"message": "hello world"
		}, () => {
			clearTimeout(timeout);
			resolve();
		});
  	});

	await promise;

	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ some: "result" }))

	/*pusher.get({ path: '/channels/my-channel', params: {} }, function(error, request, response) {
	  if(response.statusCode === 200) {
	    var result = JSON.parse( response.body );
	    var channelsInfo = result.occupied;
	    console.log(channelsInfo)
	  }
	});*/
}

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

export default (req, res) => {
	pusher.trigger('my-channel', 'my-event', {
  		"message": "hello world"
	});
	pusher.get({ path: '/channels/my-channel', params: {} }, function(error, request, response) {
  if(response.statusCode === 200) {
    var result = JSON.parse( response.body );
    var channelsInfo = result.occupied;
    console.log(channelsInfo)
  }
});
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

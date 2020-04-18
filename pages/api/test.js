import Pusher from 'pusher';
import pusherSettings from '../../config/__secret__pusher.json'

const pusher = new Pusher(pusherSettings);

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

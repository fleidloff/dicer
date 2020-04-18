import Pusher from 'pusher';
import pusherSettings from '../../config/__secret__pusher.json'

const pusher = new Pusher(pusherSettings);

export default (req, res) => {
	pusher.trigger('my-channel', 'my-event', {
  		"message": "hello world"
	});
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

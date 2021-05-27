const express = require('express');
const path = require('path');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.listen(port, () => console.log('app is running'));

app.get('/service-worker.js', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'src', 'service-worker.js'));
});

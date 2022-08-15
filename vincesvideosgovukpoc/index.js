
const express = require('express'); //Import the express dependency
const videos = require('./data/videos.json');
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

app.set('view engine', 'ejs');

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {
    res.render('index', { root: __dirname });
});

app.get('/videos', (req, res) => {
    res.render('videos', { root: __dirname, videos: videos });
});

app.use('/node_modules', function (req, res) {
    return res.status(404).send('Not Found.');
});

app.use("/", express.static(__dirname));

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

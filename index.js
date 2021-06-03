const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

server.use('/', (req,res) => {
    res.send(`<h1>Hello There</h1>`)
})

server.use('/api', (req, res) => {
    res.json({
        message: "Woooo! You've done your first Heroku deployment"
    })
})

server.use((req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
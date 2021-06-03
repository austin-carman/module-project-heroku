const express = require('express');

const server = express();

server.use(express.json());

server.use((req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
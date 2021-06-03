const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

server.get('/', (req,res) => {
    res.send(
        `<h1>Marry Christmas!</h1>
        <pre>
                .
               .0.
              ..0..
             .0...0.
            .0..0..0.
               ||
        </pre>
        <p>(Try the /api endpoint)</p>
    `)
})

server.get('/api', (req, res) => {
    res.json({
        message: "Santa's watching you!"
    })
})

server.use((req, res) => { //.use is for global middleware
    res.status(404).json({
        message: 'not found'
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.json());

server.use(cors());

server.use('/api', (req, res) => {
    res.json({
        message: "Santa's watching you!"
    })
})

server.use('/', (req,res) => {
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

server.use((req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})
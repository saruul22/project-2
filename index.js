import express from 'express';

const app = express();

const messages = [
    "hello world",
    "hello message 2"
]

app.get('/', (req, res) => {
    res.send(`hello the messages are ${messages.join(', ')}`);
});

app.listen(8000, () => {
    console.log('listening on localhost:8000');
});
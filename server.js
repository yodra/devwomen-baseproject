const express = require('express');
const app = express();

let movies = [
    { id: '1', name: 'Matrix' },
    { id: '2', name: 'Star Wars' }
];

app.use(express.json());

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
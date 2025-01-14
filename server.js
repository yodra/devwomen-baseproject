import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

let movies = [
    { id: '1', name: 'Matrix' },
    { id: '2', name: 'Star Wars' }
];

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// API
app.get('/movies', (req, res) => {

    if (Math.random() > 0.5) {
        res.status(500).send('Error en el servidor');
        return;
    }

    setTimeout(() => {
        res.json(movies);
    }, 2000);
});

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});
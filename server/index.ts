import express from 'express';
import { PORT } from './config/constants';

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

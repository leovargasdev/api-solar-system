import 'dotenv/config';
import path from 'path';
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/files/planets', express.static(path.resolve(__dirname, 'assets', 'planets')));

app.listen(process.env.PORT || 3333);

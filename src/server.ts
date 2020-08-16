import 'dotenv/config';
// import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3333);

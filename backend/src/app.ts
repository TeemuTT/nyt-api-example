import 'dotenv/config';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import apiRouter from './routes';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api', apiRouter);

export default app;

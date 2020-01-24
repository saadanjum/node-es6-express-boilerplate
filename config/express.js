import express from 'express';
import routes from '../server/routes/index.route';

const app = express();

app.use('/', routes);


export default app;